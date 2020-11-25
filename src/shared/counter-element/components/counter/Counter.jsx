import React from 'react';
import './Counter.scss';

import { actionWrapper } from "./Counter.helper";

const Counter = ({
    id,
    amount = 0,
    onChangeHandler = () => {}
}) => {

    const [ increace, decreace ] = actionWrapper(id, amount, onChangeHandler);

    return (
        <div className="counter flex">
            <div
                className="text--orange cursor--pointer"
                onClick={increace}
            >
                —
            </div>
            <div>
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