import React from 'react';

import ListHeader from "./components/list-header/ListHeader";
import ListCounter from "./components/list-counter/ListCounter";

const CounterList = ({
    idSelected,
    counterListAmount,
    counterList
}) => {
    return (
        <div>
            <ListHeader counterList={counterList} idSelected={idSelected} counterListAmount={counterListAmount} />
            <ListCounter counterList={counterList} />
        </div>
    );
}

export default CounterList;