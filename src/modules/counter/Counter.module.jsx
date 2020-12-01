import React, { Component } from 'react';

import { getListCount, setCounterListSelected, wrapperModalChangeState } from "./Counter.helper";
import CounterContent from "./components/counter-content/CounterContent";
import { getCounterList, createCounter, updateCounter, deleteCounter } from "../../services/counter.service";
import Wellcome from "./components/wellcome/Wellcome";

import ErrorCreationModal from "./components/error-creation-modal/ErrorCreationModal";
import ErrorUpdateModal from "./components/error-update-modal/ErrorUpdateModal";
import ErrrorDeleteModal from "./components/error-delete-modal/ErrorDeleteModal";

class CounterModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterList: [],
            idSelected: new Set(),
            counterListCount: 0,
            isLoading: false,

            showErrorCreation: false,
            showErrorGet: false,
            showErrorUpdate: false,
            counterElement: {},

            showDeleteModal: false,
            retry: () => {},
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
                    showErrorGet: false,
                    counterListCount,
                    counterList: resp
                });
            }).catch(() => {
                this.setState({ showErrorGet: true });
            });
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
        return updateCounter(id, inc)
            .then((updatedEl) => {
                const { counterList, idSelected } = this.state;
                const updatedList = counterList.map(el => el.id === updatedEl.id ? updatedEl : el);
                const updateCounterList = setCounterListSelected(idSelected)(updatedList);

                this.setState({
                    showErrorUpdate: false,
                    counterList: updateCounterList,
                });
            }).catch(() => {
                const { counterList } = this.state;
                const element = counterList.find(el => el.id === id);
                const count = inc ? element.count +1 : element.count -1;
                const updatedElement = { ...element, count };

                this.setState({
                    showErrorUpdate: true,
                    counterElement: updatedElement,
                    retry: () => { this.updateCounter(id, inc) }
                });
            });
    }

    deleteCounterList = (selectedCounterList = []) => {

        Promise.all(selectedCounterList.map(this.deleteCounter));
    }

    deleteCounter = (element) => {
        return deleteCounter(element.id)
            .then((id) => {
                const { idSelected, counterList } = this.state;
                idSelected.delete(id);
                const updatedCounterList = counterList.filter(el => el.id !== id)

                this.setState({
                    showDeleteModal: false,
                    idSelected,
                    counterList: updatedCounterList
                });
            }).catch(() => {
                const { showDeleteModal } = this.state;
                if(showDeleteModal) return false;

                this.setState({
                    showDeleteModal: true,
                    counterElement: element,
                    retry: () => { this.deleteCounter(element) }
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

            showErrorCreation,
            showErrorGet,
            showErrorUpdate,

            showDeleteModal,
            counterElement,
            retry,
        } = this.state;

        const handlerModalCreation = wrapperModalChangeState('showErrorCreation', this.changeVisibilityModal);
        const handlerModalUpdate = wrapperModalChangeState('showErrorUpdate', this.changeVisibilityModal);
        const handlerModalDelete = wrapperModalChangeState('showDeleteModal', this.changeVisibilityModal);

        return (
            <>
                <Wellcome onWellcome={this.onWellcome} />

                <CounterContent
                    isLoading={isLoading}
                    hasErrorLoading={showErrorGet}
                    idSelected={idSelected}
                    counterList={counterList}
                    counterListCount={counterListCount}
                    getCounter={this.getCounter}
                    updateCounter={this.updateCounter}
                    setSelectedIds={this.setSelectedIds}
                    deleteCounter={this.deleteCounterList}
                    addCounter={this.addCounter}
                />

                <ErrorCreationModal
                    show={showErrorCreation}
                    changeVisibility={handlerModalCreation}
                />

                <ErrorUpdateModal
                    show={showErrorUpdate}
                    data={counterElement}
                    retry={retry}
                    dismiss={handlerModalUpdate}
                />

                <ErrrorDeleteModal
                    show={showDeleteModal}
                    data={counterElement}
                    retry={retry}
                    dismiss={handlerModalDelete}
                />
            </>
        );
    }
}

export default CounterModule;