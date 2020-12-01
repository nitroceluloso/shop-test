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
            <div className="action-bar__content flex-space-between flex-direction-row-reverse">
                <Button
                    type="call-action"
                    icon="plus"
                    onClickHandler={onAdd}
                />

                {
                    showActions &&
                    <div className="action-bar__action-buttons flex-space-between flex-align-center" style={ {width: '160px'} }>
                        <Button  icon="trash"  onClickHandler={onDelete} />
                        <ButtonShare counterList={counterList} />
                    </div>
                }
            </div>
        </aside>
    );
}

export default ActionBar;