import React from 'react';
import ModalDialog from "../../../../shared/modal-dialog/ModalDialog";
import Button from "../../../../shared/button/Button";

const ErrorCteationModal = ({
    show = false,
    changeVisibility = () => {}
}) => {
    return (
        <ModalDialog
            display={show}
            title="Couldn't create counter"
            description="The Internet connection appears to be offline."
        >
            <div className="flex-justify-center">
                <Button type="call-action" text="Dismiss" onClickHandler={changeVisibility} />
            </div>
        </ModalDialog>
    );
}

export default ErrorCteationModal;