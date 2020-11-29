import React, { Component } from 'react';

import CounterContent from "./components/counter-content/CounterContent";
import { getCounterList, createCounter, updateCounter, deleteCounter } from "../../services/counter.service";

class CounterModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterList: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.changeLoadingState(() => {
            this.getCounter().then(this.changeLoadingState)
        })
    }

    changeLoadingState = (cb = () => {}) => {
        const { isLoading } = this.state;
        this.setState({ isLoading: !isLoading }, cb);
    }

    getCounter = () => {
        return getCounterList().then((resp) => {
            this.setState({ counterList: resp });
        })
    }

    addCounter = (data) => {
        createCounter(data);
    }

    updateCounter = (id, inc = true) => {
        updateCounter(id, inc)
            .then((updatedEl) => {
                const { counterList } = this.state;
                const updatedList = counterList.map(el => el.id === updatedEl.id ? updatedEl : el);
                this.setState({ counterList: updatedList });
            });
    }

    deleteCounter = (data) => {
        deleteCounter(data)
    }

    render() {
        const { counterList, isLoading } = this.state;

        return (
            <CounterContent
                isLoading={isLoading}
                counterList={counterList}
                getCounter={this.getCounter}
                updateCounter={this.updateCounter}
            />
        );
    }
}

export default CounterModule;