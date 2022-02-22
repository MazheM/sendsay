import React from 'react';
import './index.scss';

export const UserName = ({login, sublogin}) => {

    return (
        <div className="username">
            <span className="username__login">{login}</span>
            {sublogin && <span className="username__sublogin">{sublogin}</span>}
        </div>
    )
}
