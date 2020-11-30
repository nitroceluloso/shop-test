import React from 'react';
import ClickOut from "./ClickOut";

const widthClickOut = (InnerComponent) => (props) => {
    return (
        <ClickOut>
            <InnerComponent {...props} />
        </ClickOut>
    );
}
export default widthClickOut;