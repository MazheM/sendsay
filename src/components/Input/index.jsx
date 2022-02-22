import React from 'react';
import classNames from 'classnames';
import { useField } from 'formik';
import './index.scss';

export const Input = ({ label, hint, type = 'text', hasError = false, className, ...props }) => (
    <label className={classNames('input', { 'input--error': hasError }, className)}>
        <div className="input__info">
            <div className="input__label">{label}</div>
            {hint && <span className="input__hint">{hint}</span>}
        </div>
        {type === 'textarea' ? <textarea className="input__control" {...props}/> : <input className="input__control" type={type} {...props}/> }
    </label>
);

export const FormikInput = ({...props}) => {
    const [field, meta] = useField(props);
    return (
        <Input {...field} {...props} hasError={meta.touched && meta.error} />
    )
}