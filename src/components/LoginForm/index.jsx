import React from "react";
import { FormikInput } from "../Input";
import { Button } from "../Button";
import { FormError } from "../FormError";
import { Formik, Form } from "formik";
import {
    validateUsername,
    validateEmail,
    validatePassword,
} from "../../utils/validators";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { loginSendsay } from '../../store/actions/auth';

const validate = ({ login, sublogin, password }) => {
    const errors = {};
    if (!login || !(validateUsername(login) || validateEmail(login))) {
        errors.login = "Invalid login";
    }

    if (sublogin && !(validateUsername(sublogin) || validateEmail(sublogin))) {
        errors.sublogin = "Invalid sublogin";
    }

    if (!password || !validatePassword(password)) {
        errors.password = "Invalid password";
    }
    return errors;
};

export const LoginForm = () => {
    const { error, loggingIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{ login: "", sublogin: "", password: "" }}
            validate={validate}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={async (values) => {
                dispatch(loginSendsay(values));
            }}
        >
            {({ isSubmitting }) => (
                <Form className="login-form">
                    <h3 className="login-form__title">API-консолька</h3>

                    {error && (
                        <div className="login-form__row">
                            <FormError
                                title="Вход не вход"
                                subtitle={JSON.stringify(error)}
                            />
                        </div>
                    )}

                    <div className="login-form__row">
                        <FormikInput name="login" label="Логин" />
                    </div>

                    <div className="login-form__row">
                        <FormikInput
                            name="sublogin"
                            label="Сублогин"
                            hint="Опционально"
                        />
                    </div>

                    <div className="login-form__row">
                        <FormikInput
                            name="password"
                            label="Пароль"
                            type="password"
                        />
                    </div>

                    <div className="login-form__row">
                        <Button type="submit" isLoading={isSubmitting || loggingIn}>
                            Войти
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
