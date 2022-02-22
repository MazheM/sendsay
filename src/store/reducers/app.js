import { ENTER_FULLSCREEN, EXIT_FULLSCREEN, TOGGLE_FULLSCREEN, CHANGE_REQUEST_FIELD_SIZE as CHANGE_REQUEST_FIELD_WIDTH } from "../action-types";

const initialState = {
    isFullscreen: false,
    history: [],
    requestWidth: '50%'
};

export const app = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_FULLSCREEN:
            return {
                ...state,
                isFullscreen: true
            }

        case EXIT_FULLSCREEN:
            return {
                ...state,
                isFullscreen: false
            };

        case TOGGLE_FULLSCREEN:
            return {
                ...state,
                isFullscreen: !state.isFullscreen
            };

        case CHANGE_REQUEST_FIELD_WIDTH:
            return {
                ...state,
                requestWidth: action.width
            };

        default:
            return state;
    }
};
