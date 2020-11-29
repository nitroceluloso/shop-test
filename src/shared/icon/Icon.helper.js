import React from 'react';

import FindIcon from "./components/find";
import Share from "./components/share";
import Plus from "./components/plus";
import CircleClose from "./components/circleClose";

import Trash from "./components/trash";
import Minus from "./components/minus";
import Refresh from "./components/refresh";

const iconList = new Map([
    ['find', FindIcon],
    ['share', Share],
    ['plus', Plus],
    ['circleClose', CircleClose],

    ['trash', Trash],
    ['minus', Minus],
    ['refresh', Refresh]
]);

export const getIcon = (name, width, height) => {
    const Icon = iconList.get(name);
    if(!Icon) return '';

    return(
        <Icon width={width} height={height} />
    )
};

