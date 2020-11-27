import React from 'react';
import './CounterElement.scss';

import * as classnames from "classnames";
import Counter from "./components/counter/Counter";

const CounterElement = ({
    id,
    title,
    isSelected = false,
    amount,
    onClickHandler = () => { },
    onChangeHandler = () => {}
}) => {

    const classStr = classnames(
        {
            'counter-element--selected': isSelected,
            'counter-element': !isSelected
        },
        'flex',
        'flex-space-between'
    );

    return (
        <div className={classStr}>
            <div
                className="w75 capitalize-first-letter"
                onClick={onClickHandler}
            >
                {title}
            </div>
            <Counter
                id={id}
                amount={amount}
                onChangeHandler={onChangeHandler}
            />
        </div>
    );
}

export default CounterElement;