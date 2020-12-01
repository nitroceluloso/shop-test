import React from 'react';
import './Input.scss';

const Input = ({
    name,
    value,
    placeholder,
    onChange = () => {},
    onFocus = () => {},
    onBlur= () => {}
}) => {
    return (
        <input
            className="input-text"
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}

export default Input;