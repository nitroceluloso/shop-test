import React from 'react';
import './ListHeader.scss';

import Icon from "../../../../../../shared/icon/Icon";

const ListHeader = ({
    counterList = [],
    counterListAmount = 0,
    idSelected = new Set(),
    onRefresh = () => {}
}) => {

    if(counterList.length === 0) return '';

    return (
        <div className="counter-list__header">
            {
                idSelected.size === 0 &&
                <div className="flex">
                    <span className="font-soft-black fz17"> { counterList.length } items </span>
                    <span className="font-dark-silver fz17"> { counterListAmount } times </span>
                    <div onClick={onRefresh}>
                        <Icon name="refresh" />
                    </div>
                </div>
            }

            {
                idSelected.size !== 0 &&
                <div>
                    <span> { idSelected.size } </span>
                </div>
            }
        </div>
    );
}

export default ListHeader;