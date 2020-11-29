import React from 'react';
import './InputSearch.scss';

import Icon from "../icon/Icon";
import Input from "../input/Input";

const InputSearch = ({
    name,
    value,
    placeholder = '',
    onChangehandler = () => {},
    onFocusHandler = () => {},
    onBlurHandler = () => {}
}) => {
    return (
        <div className="search-input flex">
            <Icon name="find"/>
            <Input
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChangehandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
            />
        </div>
    );
}

export default InputSearch;