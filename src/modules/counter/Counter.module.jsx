import React, { Component } from 'react';

import { getListCount, setCounterListSelected } from "./Counter.helper";
import CounterContent from "./components/counter-content/CounterContent";
import { getCounterList, createCounter, updateCounter, deleteCounter } from "../../services/counter.service";

class CounterModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterList: [],
            idSelected: new Set(),
            counterListCount: 0,
            isLoading: false
        }
    }

    componentDidMount() {
        this.changeLoadingState(() => {
            this.getCounter().then(this.changeLoadingState)
        })
    }

    setSelectedIds = (id) => {
        const { idSelected, counterList } = this.state;
        const isSelected = idSelected.has(id);
        isSelected ? idSelected.delete(id) : idSelected.add(id);
        const updatedCounterList = setCounterListSelected(idSelected)(counterList);

        this.setState({
            idSelected,
            counterList: updatedCounterList
        });
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
                const { counterList, idSelected } = this.state;
                const updatedList = counterList.map(el => el.id === updatedEl.id ? updatedEl : el);
                const updateCounterList = setCounterListSelected(idSelected)(updatedList);
                const counterListCount = getListCount(updatedList);

                this.setState({
                    counterList: updateCounterList,
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
                setSelectedIds={this.setSelectedIds}
            />
        );
    }
}

export default CounterModule;