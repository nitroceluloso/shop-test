import React, { Component } from 'react';

import ActionBar from "../../../../shared/action-bar/ActionBar";
import DeleteModal from "./components/delete-modal/DeleteModal";
import CreationModal from "./components/creation-modal/CreationModal";
import { getDeleteModalTitle } from "./CounterNav.helper";

class CounterNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteModal: false,
            showAddModal: false
        }
    }

    changeVisibility = (name) => {
        this.setState({ [name]: !this.state[name] });
    }

    onDelete = () => {
        const { counterList = [], deleteCounter = () => {}} = this.props;
        this.changeVisibility('showDeleteModal');
        const filteredList = counterList.filter( el => el.isSelected);
        deleteCounter(filteredList);
    }

    render() {
        const { showDeleteModal, showAddModal } = this.state;
        const { idSelected, counterList, addCounter = () => {} } = this.props;
        const showActions = idSelected.size ? true : false;
        const deleteTitle = getDeleteModalTitle(counterList);

        const onChangeDeleteModal = () => { this.changeVisibility('showDeleteModal') };
        const onChangeAddModal = () => {this.changeVisibility('showAddModal') };

        return (
            <div>
                <ActionBar
                    showActions={showActions}
                    onDelete={onChangeDeleteModal}
                    onAdd={onChangeAddModal}
                />

                <DeleteModal
                    show={showDeleteModal}
                    title={deleteTitle}
                    onCancel={onChangeDeleteModal}
                    onDelete={this.onDelete}
                />

                <CreationModal
                    show={showAddModal}
                    changeVisibility={onChangeAddModal}
                    addCounter={addCounter}
                />

            </div>
        );
    }
}

export default CounterNav;