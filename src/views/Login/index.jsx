import React from "react";
import "./index.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { LoginForm } from "../../components/LoginForm";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const Login = () => {
    const session = useSelector((state) => state.auth.session);

    return session ? (
        <Redirect to="/" />
    ) : (
        <div className="login-view">
            <div className="login-view__main">
                <div className="login-view__logo">
                    <Logo />
                </div>
                <div className="login-view__form">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};
