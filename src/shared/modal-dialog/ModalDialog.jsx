import React from 'react';
import ReactDOM from "react-dom";

import Dialog from "./components/dialog/Dialog";
import Background from "../modal-background/ModalBackground";

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
                <Dialog title={title} description={description} display={display}>
                    {children}
                </Dialog>
                <Background display={display} onClickChandler={changeVisibility} />
            </>
        ),
        domElement
    )
}

export default ModalDialog;