import React, { Component } from 'react';
import './InputSearch.scss';

import Icon from "../icon/Icon";
import Input from "../input/Input";

const InputSearch = ({
    name,
    value,
    placeholder = '',
    // isActive = false ,
    onChange,
    onFocus
}) => {
    return (
        <div className="search-input flex">
            <Icon name="find"/>
            <Input
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
            />
        </div>
    );
}

export default InputSearch;