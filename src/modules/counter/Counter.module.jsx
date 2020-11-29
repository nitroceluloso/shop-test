import React, { Component } from 'react';

import { getListCount } from "./Counter.helper";
import CounterContent from "./components/counter-content/CounterContent";
import { getCounterList, createCounter, updateCounter, deleteCounter } from "../../services/counter.service";

class CounterModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterList: [],
            counterListCount: 0,
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
            const counterListCount = getListCount(resp);

            this.setState({
                counterListCount,
                counterList: resp
            });
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
                const counterListCount = getListCount(updatedList);

                this.setState({
                    counterList: updatedList,
                    counterListCount
                });
            });
    }

    deleteCounter = (data) => {
        deleteCounter(data)
    }

    render() {
        const { counterList, isLoading, counterListCount } = this.state;

        return (
            <CounterContent
                isLoading={isLoading}
                counterList={counterList}
                counterListCount={counterListCount}
                getCounter={this.getCounter}
                updateCounter={this.updateCounter}
            />
        );
    }
}

export default CounterModule;