import React from 'react';
import './Button.scss';

import Icon from "../icon/Icon";
import classnames from "classnames";
import { getClassName } from "./Button.helper";

/**
 *
 * @param {String} style - {call-action, action, pill, default}
 */
const Button = ({
    text,
    icon,
    type = 'default',
    onClickHandler = () => {}
}) => {
    const classNameStr = classnames(
        'button',
        'flex-justify-center',
        getClassName(type),
        { 'button--icon': icon ? true : false }
    );

    return (
        <button
            className={classNameStr}
            onClick={onClickHandler}
        >
            { text }

            {
                icon &&
                <Icon name={icon}/>
            }
        </button>
    );
}

export default Button;