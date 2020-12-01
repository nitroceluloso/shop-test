import React from 'react';
import './CounterList.scss';

import ListHeader from "./components/list-header/ListHeader";
import ListCounter from "./components/list-counter/ListCounter";
import ListEmpty from "./components/list-empty/ListEmpty";
import classnames from "classnames";

import ListErrorLoading from "./components/list-error-loading/ListErrorLoading";

const CounterList = ({
    // isLoading = false,
    hasErrorLoading = false,
    hasFilter = false,
    isTransparentList = false,
    idSelected,
    // counterListCount,
    counterList = [],
    getCounter = () => {},
    updateCounter= () => {},
    onSelect= () => {}
}) => {

    const classStr = classnames('counter-list', { 'opacity-20': isTransparentList });
    const hasData = counterList.length !== 0;
    const isEmpty = counterList.length === 0 && !hasFilter;
    const isEmptyFiltered = counterList.length === 0 && hasFilter;

    const counterQuantity = counterList.reduce((prev, act) => prev + act.count, 0);

    return (
        <div className={classStr}>
            <ListHeader
                counterList={counterList}
                idSelected={idSelected}
                counterListCount={counterQuantity}
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
                isEmpty && !hasErrorLoading &&
                <ListEmpty />
            }

            {
                isEmptyFiltered && !hasErrorLoading &&
                <ListEmpty isFiltered />
            }

            <ListErrorLoading show={hasErrorLoading} retry={getCounter} />

        </div>
    );
}

export default CounterList;