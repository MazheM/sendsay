import { loadState } from "../services/local-storage";
import { sendsay } from "../services/sendsay";

export function getRestoredState() {
    const state = loadState();

    if(state && state.auth && state.auth.session) {
        sendsay.setSession(state.auth.session);
    }

    return state;
}