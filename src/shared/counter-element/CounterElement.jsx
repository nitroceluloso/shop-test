import React from 'react';
import './CounterElement.scss';

import * as classnames from "classnames";
import Counter from "./components/counter/Counter";

const CounterElement = ({
    id,
    title,
    isSelected = false,
    count,
    onClickHandler = () => { },
    onChangeHandler = () => {}
}) => {

    const classStr = classnames(
        {
            'counter-element--selected': isSelected,
            'counter-element': !isSelected
        },
        'flex',
        'flex-space-between',
        'flex-align-items-baseline'
    );

    return (
        <div className={classStr}>
            <div
                className="w75 capitalize-first-letter"
                onClick={ () => {onClickHandler(id)} }
            >
                {title}
            </div>
            <Counter
                id={id}
                count={count}
                onChangeHandler={onChangeHandler}
            />
        </div>
    );
}

export default CounterElement;