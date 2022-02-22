import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import { Login } from "./views/Login";
import { App } from "./views/App";
import { PrivateRoute } from "./components/PrivateRoute";

export const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/">
                        <App />
                    </PrivateRoute>
                </Switch>
            </Router>
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired,
};
