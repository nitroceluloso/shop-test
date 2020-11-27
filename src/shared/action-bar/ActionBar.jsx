import React from 'react';
import './ActionBar.scss';

import Button from "../button/Button";

const ActionBar = ({
    showActions = false,
    onAddClick = () => {}
}) => {
    return (
        <aside className="action-bar">
            <div
                className="flex-space-between"
                onClick={onAddClick}
            >
                <div className="flex-space-between flex-align-center" style={ {width: '160px'} }>
                    {
                        showActions &&
                        <>
                            <Button style="" icon="trash" />
                            <Button style="" icon="share" />
                        </>
                    }
                </div>
                <Button style="call-action" icon="plus" />
            </div>
        </aside>
    );
}

export default ActionBar;