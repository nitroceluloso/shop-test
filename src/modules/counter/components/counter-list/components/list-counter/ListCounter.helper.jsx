import React from 'react';
import CounterElement from "../../../../../../shared/counter-element/CounterElement";

export const counterListMapFn = ({
    id,
    title,
    isSelected,
    amount,
    onClickHandler = () => {},
    onChangeHandler = () => {}
}) =>
    <CounterElement
        key={id}
        id={id}
        title={title}
        isSelected={isSelected}
        amount={amount}
        onChangeHandler={onChangeHandler}
        onClickHandler={onClickHandler}
    />