import React from 'react';
import './ListErrorLoading.scss';
import Button from "../../../../../../shared/button/Button";

const LisErrorLoading = ({
    show= false,
    retry = () => {}
}) => {
    if(!show) return '';

    return (
        <div className="counter__error-message">
            <h1 className="fz22 text-center"> Couldn’t load the counters </h1>
            <p className="fz17 text-center font-soft-black">The Internet connection appears to be offline.</p>

            <div className="flex-justify-center">
                <Button type="action" text="Retry" onClickHandler={retry} />
            </div>
        </div>
    );
}

export default LisErrorLoading;