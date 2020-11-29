import React from 'react';
import CounterElement from "../../../../../../shared/counter-element/CounterElement";

export const counterListMapFn = (onSelect, onChange) =>
    ({
        id,
        title,
        isSelected,
        count,
    }) =>
        <CounterElement
            key={id}
            id={id}
            title={title}
            isSelected={isSelected}
            count={count}
            onChangeHandler={onChange}
            onClickHandler={onSelect}
        />