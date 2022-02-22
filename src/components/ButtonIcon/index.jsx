import React from 'react';
import './index.scss';

export const ButtonIcon = ({children, icon, position = 'after', ...props}) => (
    <button className="btn-icon" {...props}>
        {(icon && position === 'before') && <span className="btn-icon__icon">{icon}</span>}
        {children && <span className="btn-icon__text">{children}</span>}
        {(icon && position === 'after') && <span className="btn-icon__icon">{icon}</span>}
    </button>
)