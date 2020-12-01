import React, { Component } from 'react';
import './Wellcome.scss';

import Icon from "../../../../shared/icon/Icon";
import Button from "../../../../shared/button/Button";

class WellcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        // !localStorage.getItem('firstTime')
    }

    hideComponent = () => {
        const { onWellcome = () => {} } = this.props;
        // localStorage.setItem('firstTime', false)
        this.setState({ show: false }, onWellcome);
    }

    render() { 
        const { show } = this.state;
        if(!show) return '';

        return (
            <div className="wellcome">
                <div className="wellcome__icon">
                    <Icon name="wellcome"  />
                </div>

                <div className="wellcome__text">
                    <h1 className="fz22">Wellcome to counters</h1>
                    <p className="fz17">Capture cups of lattes, frapuccinos, or anything else that can be counted.</p>
                </div>

                <div className="wellcome__button flex-justify-center">
                    <Button type="call-action" text="Get started" onClickHandler={this.hideComponent}/>
                </div>
            </div>
        );
    }
}

export default WellcomeScreen;