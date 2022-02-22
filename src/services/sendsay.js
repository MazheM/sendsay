import Sendsay from "sendsay-api";
import { getCookie } from "../utils";

export const SENDSAY_SESSION_COOKIE = "sendsay_session";

export const sendsay = new Sendsay();
sendsay.setSessionFromCookie();

export const hasSession = () => {
    return !!getCookie(SENDSAY_SESSION_COOKIE);
};
