import React from 'react';
import './CounterList.scss';

import ListHeader from "./components/list-header/ListHeader";
import ListCounter from "./components/list-counter/ListCounter";
import ListEmpty from "./components/list-empty/ListEmpty";
import classnames from "classnames";

const CounterList = ({
    isLoading = false,
    hasFilter = false,
    isTransparentList = false,
    idSelected,
    counterListCount,
    counterList = [],
    getCounter = () => {},
    updateCounter= () => {},
    onSelect= () => {}
}) => {

    const classStr = classnames('counter-list', { 'opacity-20': isTransparentList });
    const hasData = counterList.length !== 0;
    const isEmpty = counterList.length === 0 && !hasFilter;
    const isEmptyFiltered = counterList.length === 0 && hasFilter;

    return (
        <div className={classStr}>
            <ListHeader
                counterList={counterList}
                idSelected={idSelected}
                counterListCount={counterListCount}
                onRefresh={getCounter}
            />

            {
                hasData &&
                <ListCounter
                    selectCounter={onSelect}
                    counterList={counterList}
                    updateCounter={updateCounter}
                />
            }

            {
                isEmpty &&
                <ListEmpty />
            }

            {
                isEmptyFiltered &&
                <ListEmpty isFiltered />
            }

        </div>
    );
}

export default CounterList;