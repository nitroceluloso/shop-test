import React from 'react';

import FindIcon from "./components/find";
import Share from "./components/share";
import Plus from "./components/plus";

const iconList = new Map([
    ['find', <FindIcon/>],
    ['share', <Share />],
    ['plus', <Plus />]
]);

export const getIcon = (name) => iconList.get(name);

