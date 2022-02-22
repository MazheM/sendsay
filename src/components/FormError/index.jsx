import React from 'react';
import { ReactComponent as Icon } from '../../assets/icons/meh.svg';
import './index.scss';

export const FormError = ({ title, subtitle }) => (
    <div className="form-error">
        <div className="form-error__icon">
            <Icon />
        </div>
        <div className="form-error__content">
            <h6 className="form-error__title">{title}</h6>
            {subtitle && <p className="form-error__subtitle">{subtitle}</p>}
        </div>
    </div>
)