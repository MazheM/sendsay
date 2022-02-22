import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./Root";
import { store } from './store';
import "./styles/index.scss";


ReactDOM.render(
    <React.StrictMode>
        <Root store={store} />
    </React.StrictMode>,
    document.getElementById("root")
);
