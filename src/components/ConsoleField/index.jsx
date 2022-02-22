import React from "react";
import classNames from 'classnames';
import './index.scss';

export const ConsoleField = ({ label, type = "text", hasError = false, ...props }) => {
    return (
        <label
            className={classNames("console-field", {
                "console-field--error": hasError,
            })}
        >
            <div className="console-field__info">
                <div className="console-field__label">{label}</div>
            </div>
            <textarea className="console-field__control" {...props} />
        </label>
    );
};
