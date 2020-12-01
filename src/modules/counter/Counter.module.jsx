import React, { Component } from 'react';

import { getListCount, setCounterListSelected, wrapperModalChangeState } from "./Counter.helper";
import CounterContent from "./components/counter-content/CounterContent";
import { getCounterList, createCounter, updateCounter, deleteCounter } from "../../services/counter.service";
import Wellcome from "./components/wellcome/Wellcome";

import ErrorCreationModal from "./components/error-creation-modal/ErrorCreationModal";

class CounterModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterList: [],
            idSelected: new Set(),
            counterListCount: 0,
            isLoading: false,
            showErrorCreation: false
        }
    }

    componentDidMount() {
        if(window.innerWidth > 1150) {
            this.changeLoadingState(() => {
                this.getCounter().then(this.changeLoadingState);
            })
        }
    }

    onWellcome = () => {
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
        return getCounterList()
            .then((resp) => {
                const counterListCount = getListCount(resp);

                this.setState({
                    counterListCount,
                    counterList: resp
                });
            })
    }

    addCounter = (title) => {
        return createCounter({title})
            .then((el) => {
                const { counterList } = this.state;
                this.setState({
                    counterList: counterList.concat(el)
                });
                return el;
            }).catch(er => {
                this.setState({ showErrorCreation: true });
            });
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

    deleteCounter = (selectedCounterList = []) => {

        selectedCounterList.forEach(element => {
            deleteCounter(element.id)
                .then((id) => {
                    const { idSelected, counterList } = this.state;
                    idSelected.delete(id);
                    const updatedCounterList = counterList.filter(el => el.id !== id)

                    this.setState({
                        idSelected,
                        counterList: updatedCounterList
                    });
                });
        });
    }

    changeVisibilityModal = (name) => {
        this.setState({ [name]: !this.state[name] });
    }

    render() {
        const {
            counterList,
            isLoading,
            counterListCount,
            idSelected,
            showErrorCreation
        } = this.state;

        const handlerModalCreation = wrapperModalChangeState('showErrorCreation', this.changeVisibilityModal);

        return (
            <>
                <Wellcome onWellcome={this.onWellcome} />

                <CounterContent
                    isLoading={isLoading}
                    idSelected={idSelected}
                    counterList={counterList}
                    counterListCount={counterListCount}
                    getCounter={this.getCounter}
                    updateCounter={this.updateCounter}
                    setSelectedIds={this.setSelectedIds}
                    deleteCounter={this.deleteCounter}
                    addCounter={this.addCounter}
                />

                <ErrorCreationModal show={showErrorCreation} changeVisibility={handlerModalCreation}/>
            </>
        );
    }
}

export default CounterModule;