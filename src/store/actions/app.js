import { ENTER_FULLSCREEN, EXIT_FULLSCREEN, TOGGLE_FULLSCREEN, CHANGE_REQUEST_FIELD_SIZE } from "../action-types";

export const enterFullscreen = () => {
    return { type: ENTER_FULLSCREEN };
};

export const exitFullscreen = () => {
    return { type: EXIT_FULLSCREEN };
};

export const toggleFullscreen = () => {
    return { type: TOGGLE_FULLSCREEN };
};

export const setRequestFieldWidth = (width) => ({
    type: CHANGE_REQUEST_FIELD_SIZE,
    width
});