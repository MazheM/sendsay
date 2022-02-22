import React from 'react';
import classNames from 'classnames';
import './index.scss';

export const Button = ({ children, isLoading = false, ...props }) => (
    <button className={classNames('button', { 'button--loading': isLoading })} {...props}>
        <span className="button__text">{children}</span>
    </button>
)