import React from 'react';
import './ActionBar.scss';

import Button from "../button/Button";

const ActionBar = ({
    showActions = false,
    onAdd = () => {},
    onDelete = () => {},
    onShare = () => {}
}) => {
    return (
        <aside className="action-bar">
            <div
                className="flex-space-between"
                // onClick={onAddClick}
            >
                <div className="flex-space-between flex-align-center" style={ {width: '160px'} }>
                    {
                        showActions &&
                        <>
                            <Button  icon="trash"  onClickHandler={onDelete} />
                            <Button  icon="share" onClickHandler={onShare} />
                        </>
                    }
                </div>
                <Button
                    type="call-action"
                    icon="plus"
                    onClickHandler={onAdd}
                />
            </div>
        </aside>
    );
}

export default ActionBar;