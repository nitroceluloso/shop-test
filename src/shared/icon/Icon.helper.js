import React from 'react';

import FindIcon from "./components/find";
import Share from "./components/share";
import Plus from "./components/plus";
import CircleClose from "./components/circleClose";

const iconList = new Map([
    ['find', <FindIcon/>],
    ['share', <Share />],
    ['plus', <Plus />],
    ['circleClose', <CircleClose/>]
]);

export const getIcon = (name) => iconList.get(name);

