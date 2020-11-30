import React from 'react';
import './ActionBar.scss';

import Button from "../button/Button";
import ButtonShare from "./components/button-share/ButtonShare";

const ActionBar = ({
    showActions = false,
    counterList = [],
    onAdd = () => {},
    onDelete = () => {},
}) => {
    return (
        <aside className="action-bar">
            <div
                className="flex-space-between"
            >
                <div className="flex-space-between flex-align-center" style={ {width: '160px'} }>
                    {
                        showActions &&
                        <>
                            <Button  icon="trash"  onClickHandler={onDelete} />
                            <ButtonShare counterList={counterList} />
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