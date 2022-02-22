import { combineReducers } from "redux";
import { auth } from "./reducers/auth";
import { app } from "./reducers/app";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { saveState } from "../services/local-storage";
import { getRestoredState } from "../utils/restore-state";

const persistedState = getRestoredState();

const reducers = combineReducers({
    auth,
    app
});

export const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(ReduxThunk)
);

store.subscribe(() => {
    const state = store.getState();
    saveState(state);
});
