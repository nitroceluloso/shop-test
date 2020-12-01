import React from 'react';
import ModalDialog from "../../../../shared/modal-dialog/ModalDialog";
import Button from "../../../../shared/button/Button";

const ErrorUpdateModal = ({
    show = false,
    data = {},
    retry = () => {},
    dismiss = () => {}
}) => {

    const { title, count } = data;
    const titleStr = `Couldn’t update “${title}” to ${count}`;

    return (
        <ModalDialog
            display={show}
            title={titleStr}
            description="The Internet connection appears to be offline."
        >
            <div className="flex-space-between">
                <Button text="Retry" type="call-action" onClickHandler={retry}></Button>
                <Button text="Dismiss" type="action" onClickHandler={dismiss} ></Button>
            </div>
        </ModalDialog>
    );
}

export default ErrorUpdateModal;