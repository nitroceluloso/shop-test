import React from 'react';
import './ListHeader.scss';

import Icon from "../../../../../../shared/icon/Icon";

const ListHeader = ({
    isLoading = false,
    counterList = [],
    counterListCount = 0,
    idSelected = new Set(),
    onRefresh = () => {}
}) => {

    if(counterList.length === 0) return '';
    const idSelectedLength = idSelected.size === 0;

    return (
        <div className="counter-list__header">
            {
                idSelectedLength &&
                <div className="flex">
                    <span className="font-soft-black fz17"> { counterList.length } items </span>
                    <span className="font-dark-silver fz17"> { counterListCount } times </span>
                    <div onClick={onRefresh}>
                        <Icon name="refresh" />
                    </div>
                </div>
            }

            {
                !idSelectedLength &&
                <div>
                    <span> { idSelected.size } </span>
                </div>
            }
        </div>
    );
}

export default ListHeader;