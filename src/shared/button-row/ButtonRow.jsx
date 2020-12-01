import React from 'react';
import './ButtonRow.scss';

import Button from "../button/Button";

const ButtonRow = ({
    textList = [],
    onClick = () => {}
}) => {
    return (
        <div className="button-row flex overflow-x-scroll">
            {
                textList.map((el, idx) => <Button key={idx} type="pill" text={el} onClickHandler= { () => {onClick(el)} } />)
            }
        </div>
    );
}

export default ButtonRow;