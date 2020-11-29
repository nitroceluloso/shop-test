import React from 'react';

import { counterListMapFn } from "./ListCounter.helper";

const ListCounter = ({
    counterList = [],
    updateCounter = () => {},
    selectCounter = () => {}
}) => {

    const mapFn = counterListMapFn(selectCounter, updateCounter);

    return (
        <>
            { counterList.map(mapFn) }
        </>
    );
}

export default ListCounter;