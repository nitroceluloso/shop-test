import React, { Component } from 'react';

import CounterFilter from "../counter-filter/CounterFilter";
import CounterList from "../counter-list/CounterList";

class CounterContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            idSelected: new Set(),
            counterTotalAmoun: 0,
            counterListFiltered: []
        }
    }

    onSelect() {

    }

    onFilter = ({ target }) => {
        this.setState({ filter: target.value });
    }

    clearFilter = () => {
        this.setState({ filter: '' });
    }

    render() {
        const { filter, idSelected, counterTotalAmoun, counterListFiltered } = this.state;

        return (
            <div className="counter-content">
                <CounterFilter
                    onChangeHandler={this.onFilter}
                    filter={filter}
                    onClearFilter={this.clearFilter}
                />

                <CounterList
                    idSelected={idSelected}
                    counterTotalAmoun={counterTotalAmoun}
                    counterList={counterListFiltered} />
            </div>
        );
    }
}

export default CounterContent;