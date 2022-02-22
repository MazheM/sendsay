import React from "react";
import { Header } from "../../components/Header";
import "./index.scss";
import { useRef } from "react";
import { useCallback } from "react";
import { enterFullscreen, exitFullscreen, setRequestFieldWidth } from "../../store/actions/app";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "../../components/Button";
import { sendsay } from "../../services/sendsay";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ReactComponent as FormatIcon } from "../../assets/icons/format.svg";
import { ConsoleField } from "../../components/ConsoleField";
import { Dragger } from "../../components/Dragger";
import { createRef } from "react";
import throttle from "lodash/throttle";

export const App = () => {
    const rootRef = useRef(null);
    const dispatch = useDispatch();

    const storeRequestWidth = useSelector((state) => state.app.requestWidth);

    const [isLoading, setLoading] = useState(false);
    const [request, setRequest] = useState({ value: "", hasError: false });
    const [response, setResponse] = useState({ value: "", hasError: false });
    const [requestWidth, setRequestWidth]  = useState(storeRequestWidth);


    const requestChange = useCallback((e) => {
        try {
            JSON.parse(e.target.value);
            setRequest({ value: e.target.value, hasError: false });
        } catch (ex) {
            setRequest({ value: e.target.value, hasError: true });
        }
    }, []);

    const onSubmit = useCallback(async () => {
        setLoading(true);

        if (!request.value) {
            setRequest({ hasError: true });
        }

        try {
            const resp = await sendsay.request(JSON.parse(request.value));
            setResponse({
                value: JSON.stringify(resp, null, 4),
                hasError: false,
            });
        } catch (e) {
            setResponse({ value: JSON.stringify(e, null, 4), hasError: true });
        } finally {
            setLoading(false);
        }
    }, [request.value]);

    const onFormat = useCallback(async () => {
        if (!request.hasError) {
            try {
                setRequest({
                    value: JSON.stringify(JSON.parse(request.value), null, 4),
                    hasError: false,
                });
            } catch (e) {}
        }
    }, [request.hasError, request.value]);

    const onFullscreenClick = useCallback(() => {
        if (rootRef.current) {
            if (!document.fullscreenElement) {
                rootRef.current.requestFullscreen().then(() => {
                    dispatch(enterFullscreen());
                });
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen().then(() => {
                        dispatch(exitFullscreen());
                    });
                }
            }
        }
    }, [dispatch]);

    const requestsContainerRef = createRef();
    const updateRequestWidth = throttle((width) => {
        setRequestWidth(width);
    }, 100);

    const onDragStart = useCallback((e) => {
        document.body.classList.add('resizing');
    }, []);

    const onDragOver = useCallback((e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move"
        let width =
            ((e.clientX - requestsContainerRef.current.offsetLeft) / requestsContainerRef.current.clientWidth) * 100;
        if (width >= 95) {
            width = 95;
        }

        if (width <= 5) {
            width = 5;
        }

        updateRequestWidth(width + "%");
    }, [requestsContainerRef, updateRequestWidth]);

    const onDrop = useCallback((e) => {
        e.preventDefault();
        dispatch(setRequestFieldWidth(requestWidth));
        document.body.classList.remove('resizing');
    }, [dispatch, requestWidth]);

    return (
        <div className="app-view" ref={rootRef}>
            <div className="app-view__header">
                <Header onFullscreenClick={onFullscreenClick} />
            </div>
            <div className="app-view__history">history</div>
            <div className="app-view__request-wrapper">
                <div className="app-view__requests-container" onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} ref={requestsContainerRef}>
                    <div className="app-view__request" style={{ width: requestWidth }}>
                        <ConsoleField {...request} onChange={requestChange} disabled={isLoading} label="Запрос:" />
                    </div>
                    <div className="app-view__resizer">
                        <Dragger />
                    </div>
                    <div className="app-view__response">
                        <ConsoleField {...response} readOnly={true} label="Ответ:" />
                    </div>
                </div>
            </div>
            <footer>
                <Button onClick={onSubmit} disabled={request.hasError} isLoading={isLoading}>
                    Отправить
                </Button>

                <ButtonIcon icon={<FormatIcon />} position="before" onClick={onFormat}>
                    Форматировать
                </ButtonIcon>
            </footer>
        </div>
    );
};
