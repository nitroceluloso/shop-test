import React from 'react';

import FindIcon from "./components/find";

const iconList = new Map([
    ['find', <FindIcon/>]
]);

export const getIcon = (name) => iconList.get(name);

