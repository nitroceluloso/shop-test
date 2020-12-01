import React, { Component } from 'react';
import './CreationModal.scss';

import ModalSlide from "../../../../../../shared/modal-slide/ModalSlide";
import Input from "../../../../../../shared/input/Input";
import ButtonRow from "../../../../../../shared/button-row/ButtonRow";
import { drinksTextList, foodTextList, miscTextList } from "./CreationModal.herlper";

class CreationModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            showSuggestions: false,
            buttonDisabled: true,
        }
    }

    onChange = ({ target }) => {
        this.setState({
            name: target.value,
            buttonDisabled: target.value ? false : true
        });
    }

    setRecomendation = (name) => {
        this.changeSugestionModalVisibility();
        this.setState({
            name,
            buttonDisabled: false
        });
    }

    saveCounter = () => {
        const { addCounter = () => {}, changeVisibility = () => {} } = this.props;
        addCounter(this.state.name)
            .then(() => {
                changeVisibility();
                this.setState({
                    name: '',
                    buttonDisabled: true
                });
            });
    }

    changeSugestionModalVisibility = () => {
        this.setState({ showSuggestions: !this.state.showSuggestions });
    }

    render() {
        const { name, showSuggestions, buttonDisabled = true } = this.state;
        const { show, changeVisibility = () => {} } = this.props;

        return (
            <>
                <ModalSlide
                    show={show}
                    title="create counter"
                    hasButton={true}
                    buttonText="Save"
                    buttonType="call-action"
                    buttonDisabled={buttonDisabled}
                    buttonOnClick={this.saveCounter}
                    changeVisibility={changeVisibility}
                >
                    <div className="creation-modal">
                        <p className="fz17 capitalize-first-letter"> name </p>

                        <Input value={name} onChange={this.onChange}/>

                        <p> Give it a name. Creative block? See <a href="#" className="underline" onClick={this.changeSugestionModalVisibility}>examples</a>. </p>
                    </div>
                </ModalSlide>

                <ModalSlide
                    show={showSuggestions}
                    title="examples"
                    changeVisibility={this.changeSugestionModalVisibility}
                >
                    <div className="creation-modal-sugestions">
                        <p className="fz15 font-dark-silver"> Select an example to add it to your counters. </p>

                        <p className="fz17"> Drinks </p>
                        <ButtonRow textList={drinksTextList} onClick={this.setRecomendation} />

                        <p className="fz17"> Food </p>
                        <ButtonRow textList={foodTextList} onClick={this.setRecomendation} />

                        <p className="fz17"> Misc </p>
                        <ButtonRow textList={miscTextList} onClick={this.setRecomendation} />

                    </div>
                </ModalSlide>
            </>
        );
    }
}

export default CreationModal;