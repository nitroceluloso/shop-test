import React, { Component } from 'react';

import CounterFilter from "../counter-filter/CounterFilter";
import CounterList from "../counter-list/CounterList";
import { filterCounterArray } from "./CounterContent.helper";
import CounterNav from "../counter-nav/CounterNav";

class CounterContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            isFilterOnFocus: false,
            counterTotalAmoun: 0,
            counterListFiltered: []
        }
    }

    onFilter = ({ target }) => {
        const { counterList } = this.props;
        const counterListFiltered = filterCounterArray(target.value, counterList);
        this.setState({ filter: target.value, counterListFiltered });
    }

    clearFilter = () => {
        this.setState({ filter: '', isFiltering: false });
    }

    onFocusChange = (flag) => {
        this.setState({ isFilterOnFocus: flag });
    }

    render() {
        const {
            filter,
            idSelected,
            counterListFiltered,
            isFilterOnFocus
        } = this.state;

        const {
            counterList,
            isLoading,
            counterListCount,
            getCounter = () => {},
            updateCounter = () => {},
            setSelectedIds = () => {}
        } = this.props;

        const counterListUsed = filter ? counterListFiltered : counterList;
        const isTransparentList = isFilterOnFocus && !filter ? true : false;
        const hasFilter = filter ? true : false;

        return (
            <div className="counter-content">
                <CounterFilter
                    isOnFocus={isFilterOnFocus}
                    onChangeHandler={this.onFilter}
                    filter={filter}
                    onClearFilter={this.clearFilter}
                    onFocusChangeHandler={this.onFocusChange}
                />

                <CounterList
                    isLoading={isLoading}
                    hasFilter={hasFilter}
                    isTransparentList={isTransparentList}
                    idSelected={idSelected}
                    counterListCount={counterListCount}
                    counterList={counterListUsed}
                    getCounter={getCounter}
                    updateCounter={updateCounter}
                    onSelect={setSelectedIds}
                />
            </div>
        );
    }
}

export default CounterContent;