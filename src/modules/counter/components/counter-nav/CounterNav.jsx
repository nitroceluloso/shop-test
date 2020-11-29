import React, { Component } from 'react';

import ActionBar from "../../../../shared/action-bar/ActionBar";
import DeleteModal from "./components/delete-modal/DeleteModal";

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
        const { showDeleteModal } = this.state;
        const { idSelected } = this.props;
        const showActions = idSelected.size ? true : false;

        const onChangeDeleteModal = () => {this.changeVisibility('showDeleteModal')};

        return (
            <div>
                <ActionBar
                    showActions={showActions}
                    onDelete={onChangeDeleteModal}
                />

                <DeleteModal
                    show={showDeleteModal}
                    onCancel={onChangeDeleteModal}
                    onDelete={this.onDelete}
                />

            </div>
        );
    }
}

export default CounterNav;