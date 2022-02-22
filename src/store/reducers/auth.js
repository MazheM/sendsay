import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST } from "../action-types";

const initialState = {
    loggingIn: false,
    login: "",
    sublogin: "",
    session: "",
    error: null,
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                error: null
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: null,
                login: action.login,
                sublogin: action.sublogin,
                session: action.session,
            };

        case LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                error: action.error,
            };

        case LOGOUT: {
            return {
                ...initialState,
            };
        }

        default:
            return state;
    }
};
