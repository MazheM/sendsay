import React, { useCallback } from "react";
import "./index.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LogOutIcon } from "../../assets/icons/log-out.svg";
import { ReactComponent as FullscreenIcon } from "../../assets/icons/fullscreen.svg";
import { ReactComponent as WindowedIcon } from "../../assets/icons/windowed.svg";
import { UserName } from "../UserName";
import { ButtonIcon } from "../ButtonIcon";
import { useSelector, useDispatch } from "react-redux";
import { logoutSendsay } from "../../store/actions/auth";

export const Header = ({ onFullscreenClick = () => {} }) => {
    const { login, sublogin } = useSelector((state) => state.auth);
    const isFullscreen = useSelector((state) => state.app.isFullscreen);
    const dispatch = useDispatch();
    const logout = useCallback(() => {
        dispatch(logoutSendsay());
    }, [dispatch]);

    return (
        <header className="header">
            <div className="header__main">
                <Logo />
                <div className="header__title">API-консолька</div>
            </div>

            <div className="header__controls">
                <div className="header__control">
                    <UserName login={login} sublogin={sublogin} />
                </div>
                <div className="header__control">
                    <ButtonIcon icon={<LogOutIcon />} onClick={logout}>
                        Выйти
                    </ButtonIcon>
                </div>
                <div className="header__control">
                    <ButtonIcon
                        icon={
                            isFullscreen ? <WindowedIcon /> : <FullscreenIcon />
                        }
                        onClick={onFullscreenClick}
                    />
                </div>
            </div>
        </header>
    );
};
