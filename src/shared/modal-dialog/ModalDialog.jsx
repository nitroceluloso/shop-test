import React from 'react';
import ReactDOM from "react-dom";

import Background from "./components/background/Background";
import Dialog from "./components/dialog/Dialog";

const ModalDialog = ({
    title,
    description,
    children,
    display = false,
    changeVisibility = () => {}
}) => {
    const domElement = document.querySelector('#modal-dialog');

    return ReactDOM.createPortal(
        (
            <>
                <Dialog title={title} description={description}>
                    {children}
                </Dialog>
                <Background display={display} onClickChandler={changeVisibility} />
            </>
        ),
        domElement
    )
}

export default ModalDialog;