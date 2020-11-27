import React, { Component } from 'react';

import CounterContent from "./components/counter-content/CounterContent";

class CounterModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterList: [],
            isLoading: false
        }
    }

    getCounter() {

    }

    addCounter() {

    }

    updateCounter() {

    }

    deleteCounter() {

    }

    render() {
        const { counterList } = this.state;

        return (
            <CounterContent
                counterList={counterList}
                getCounter={this.getCounter}
            />
        );
    }
}

export default CounterModule;