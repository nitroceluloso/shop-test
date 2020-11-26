import React from 'react';
import './ModalBackground.scss';

import * as classnames from "classnames";
import { validateIfActive } from "./ModalBackground.helper";

const ModalBackground = ({
    display = false,
    disableClick = false,
    onClickHandler
}) => {

    const classStr = classnames({ 'modal-background--show': display, 'modal-background': !classnames })

    return (
        <div className={classStr} onClick={validateIfActive(disableClick, onClickHandler)}></div>
    );
}

export default ModalBackground;