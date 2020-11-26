import React from 'react';

import FindIcon from "./components/find";
import Share from "./components/share";
import Plus from "./components/plus";
import CircleClose from "./components/circleClose";

import Trash from "./components/trash";
import Minus from "./components/minus";

const iconList = new Map([
    ['find', <FindIcon/>],
    ['share', <Share />],
    ['plus', <Plus />],
    ['circleClose', <CircleClose/>],

    ['trash', <Trash/>],
    ['minus', <Minus/>]
]);

export const getIcon = (name) => iconList.get(name);

