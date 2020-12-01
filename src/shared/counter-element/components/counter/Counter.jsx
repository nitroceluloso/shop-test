import React from 'react';
import './Counter.scss';

import { actionWrapper } from "./Counter.helper";
import Icon from "../../../icon/Icon";
import classnames from "classnames";

const Counter = ({
    id,
    count = 0,
    onChangeHandler = () => {}
}) => {

    const [ increace, decreace ] = actionWrapper(id, count, onChangeHandler);
    const amountClassStr = classnames({ 'font-dark-silver': count === 0 });
    const minusClassStr = classnames('cursor--pointer flex-align-center', { 'fill-silver': count === 0 });

    return (
        <div className="counter flex">
            <div
                className={minusClassStr}
                onClick={decreace}
            >
                <Icon name="minus" />
            </div>
            <div className={amountClassStr}>
                { count }
            </div>
            <div
                className="flex-align-center fill-orange cursor--pointer "
                onClick={increace}
            >
                <Icon name="plus"/>
            </div>
        </div>
    );
}

export default Counter;