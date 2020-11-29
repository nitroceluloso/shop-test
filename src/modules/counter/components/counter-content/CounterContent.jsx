import React, { Component } from 'react';

import CounterFilter from "../counter-filter/CounterFilter";
import CounterList from "../counter-list/CounterList";
import { filterCounterArray } from "./CounterContent.helper";

class CounterContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            isFilterOnFocus: false,
            idSelected: new Set(),
            counterTotalAmoun: 0,
            counterListFiltered: []
        }
    }

    onSelect() {

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
            // counterTotalAmoun,
            counterListFiltered,
            isFilterOnFocus
        } = this.state;

        const {
            counterList,
            isLoading,
            counterListCount,
            getCounter = () => {},
            updateCounter = () => {}
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
                />
            </div>
        );
    }
}

export default CounterContent;