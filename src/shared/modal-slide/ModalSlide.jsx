import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './ModalSlide.scss';

import ModalBackground from "../modal-background/ModalBackground";
import Icon from "../icon/Icon";
import Button from "../button/Button";

class ModalSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.domElement = document.createElement('div');
    }

    componentDidUpdate(prevProps) {
        const { show: showBefore } = prevProps;
        const { show } = this.props;

        if(show !== showBefore) this.setState({ show });
    }

    componentDidMount() {
        document.querySelector('body').appendChild(this.domElement);
    }

    componentWillUnmount(){
        document.querySelector('body').removeChild(this.el);
    }

    render() {
        const { show } = this.state;
        const {
            title,
            children,
            hasButton = false,
            buttonText,
            buttonType,
            buttonOnClick = () => {},
            changeVisibility = () => {} } = this.props;

        if(!show) return '';

        return ReactDOM.createPortal(
            (
                <div className="modal-slide">
                    <div className="modal-slide__content">
                        <header className="flex-align-center border-box">
                            <div onClick={changeVisibility}>
                                <Icon name="circleClose"/>
                            </div>
                            <p className="fz22 capitalize-first-letter"> {title} </p>
                            {
                                hasButton &&
                                <Button
                                    type={buttonType}
                                    text={buttonText}
                                    onClickHandler={buttonOnClick}
                                />
                            }
                        </header>
                        <section>
                            { children }
                        </section>
                    </div>
                    <ModalBackground display={show} />
                </div>
            ), this.domElement);
    }
}

export default ModalSlide;