import React from 'react';
import { ReactComponent as DragIcon } from '../../assets/icons/drag-element.svg';
import './index.scss';

export const Dragger = () => {
    return (
        <button className="dragger" draggable={true}>
            <span className="dragger__icon">
                <DragIcon />
            </span>
        </button>
    )
}