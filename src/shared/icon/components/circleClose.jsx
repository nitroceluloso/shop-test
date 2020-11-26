import React from 'react';
import Plus from "./plus";

const backgroundStyle = {
    width: '28px',
    height: '28px',
    backgroundColor: '#c4c4c4',
    borderRadius: '100%',
    transform: 'rotate(45deg)'
}

const CircleClose = () => {
    return (
        <div style={backgroundStyle} className="flex flex-align-center flex-justify-center">
            <Plus height="16px" width="16px" />
        </div>
    );
}

export default CircleClose;