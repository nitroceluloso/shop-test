import React, { Component } from 'react';

import Button from "../../../button/Button";
import Popup from "../popup/Popup";
import widthClickOut from "../../../click-out/ClickOut.hoc";

class ButtonShare extends Component {
    changeVisibilityPopup = () => {
        const { changeVisibility = () => {} } = this.props;
        changeVisibility();
    }

    onCopy = () => {
        const { counterList = [] } = this.props;
        const textCounter = counterList.filter(el => el.isSelected)
                                .map(el => `${el.count} x ${el.title}`).join(', ');

        navigator.clipboard.writeText(textCounter);
        this.changeVisibilityPopup();
    }

    render() {
        const { display = false, counterList = [] } = this.props;

        return (
            <div className="position-relative">
                <Button  icon="share" onClickHandler={this.changeVisibilityPopup} />
                {
                    display &&
                    <Popup onCopy={this.onCopy} counterList={counterList} />
                }
            </div>
        );
    }
}

export default widthClickOut(ButtonShare);