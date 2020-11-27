import React from 'react';

import { counterListMapFn } from "./ListCounter.helper";

const ListCounter = ({
    counterList = [],
}) => {
    return (
        <>
            { counterList.map(counterListMapFn) }
        </>
    );
}

export default ListCounter;