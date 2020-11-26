import React from 'react';
import './Background.scss';

import * as classnames from "classnames";

const ModalBackground = ({
    display = false,
    onClickChandler
}) => {

    const classStr = classnames({ 'background--show': display, 'background': !classnames })

    return (
        <div className={classStr}></div>
    );
}

export default ModalBackground;