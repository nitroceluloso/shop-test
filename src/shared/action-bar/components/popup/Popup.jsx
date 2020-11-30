import React from 'react';
import './Popup.scss';

import Button from "../../../button/Button";
import Note from "../note/Note";

const Popup = ({
    counterList = [],
    counterSelectedQuantity,
    onCopy = () => {}
}) => {

    return (
        <div className="popup">
            <div>
                <h1 className="fz22"> Share {counterSelectedQuantity} counters </h1>
                <Button type="action" text="Copy" onClickHandler={onCopy} />
            </div>

            <Note counterList={counterList}  />
        </div>
    );
}

export default Popup;