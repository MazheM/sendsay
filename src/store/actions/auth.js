import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOGIN_REQUEST,
} from "../action-types";
import { sendsay } from "../../services/sendsay";

export const loginSendsay = (authData) => async (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST,
    });
    try {
        await sendsay.login({
            ...authData,
        });
        dispatch({
            type: LOGIN_SUCCESS,
            login: authData.login,
            sublogin: authData.sublogin,
            session: sendsay.session,
            error: null,
        });
    } catch (exception) {
        const { request, ...error } = exception;
        dispatch({
            type: LOGIN_FAIL,
            error: error,
        });
    }

    return 'done';
};

export const logoutSendsay = () => {
    return { type: LOGOUT };
};