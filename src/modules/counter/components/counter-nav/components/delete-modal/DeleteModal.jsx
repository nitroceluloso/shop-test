import React from 'react';

import ModalDialog from "../../../../../../shared/modal-dialog/ModalDialog";
import Button from "../../../../../../shared/button/Button";

const DeleteModal = ({
    show = false,
    title,
    onCancel = () => {},
    onDelete = () => {}
}) => {
    
    return (
        <ModalDialog
            display={show}
            title={title}
            description="this cannot be undone."
        >
            <div className="flex">
                <Button type="call-action" text="Cancel" onClickHandler={onCancel} />
                <Button type="danger" text="Delete" onClickHandler={onDelete} />
            </div>
        </ModalDialog>
    );
}

export default DeleteModal;