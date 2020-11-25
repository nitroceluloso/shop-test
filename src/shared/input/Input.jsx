import React from 'react';
import './Input.scss';

const Input = ({
    name,
    value,
    placeholder,
    onChange = () => {},
    onFocus = () => {}
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
        />
    );
}

export default Input;