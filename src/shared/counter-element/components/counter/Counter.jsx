import React from 'react';
import './Counter.scss';

import { actionWrapper } from "./Counter.helper";
import Icon from "../../../icon/Icon";
import * as classnames from "classnames";

const Counter = ({
    id,
    amount = 0,
    onChangeHandler = () => {}
}) => {

    const [ increace, decreace ] = actionWrapper(id, amount, onChangeHandler);
    const amountClassStr = classnames({ 'font-dark-silver': amount === 0 });
    const minusClassStr = classnames('cursor--pointer flex-align-center', { 'fill-silver': amount === 0 });

    return (
        <div className="counter flex">
            <div
                className={minusClassStr}
                onClick={increace}
            >
                <Icon name="minus" />
            </div>
            <div className={amountClassStr}>
                { amount }
            </div>
            <div
                className="text--orange cursor--pointer"
                onClick={decreace}
            >
                +
            </div>
        </div>
    );
}

export default Counter;