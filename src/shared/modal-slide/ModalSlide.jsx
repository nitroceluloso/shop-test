import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './ModalSlide.scss';

import ModalBackground from "../modal-background/ModalBackground";
import Icon from "../icon/Icon";

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
        const { title, children } = this.props;

        return ReactDOM.createPortal(
            (
                <div className="modal-slide">
                    <header className="flex-align-center">
                        <div>
                            <Icon name="circleClose"/>
                        </div>
                        <p className="fz22"> {title} </p>
                    </header>
                    <section>
                        { children }
                    </section>
                    <ModalBackground display />
                </div>
            ), this.domElement);
    }
}

export default ModalSlide;