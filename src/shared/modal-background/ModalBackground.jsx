import React from 'react';
import './ModalBackground.scss';

import classnames from "classnames";
import { validateIfActive } from "./ModalBackground.helper";

const ModalBackground = ({
    display = false,
    disableClick = false,
    onClickHandler
}) => {

    const classStr = classnames({ 'modal-background--show': display, 'modal-background': !display });

    return (
        <div className={classStr} onClick={validateIfActive(disableClick, onClickHandler)}></div>
    );
}

export default ModalBackground;