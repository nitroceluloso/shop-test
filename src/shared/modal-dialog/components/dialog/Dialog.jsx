import React from 'react';
import './Dialog.scss';

const Dialog = ({ title, description, display, children }) => {
    if(!display) return '';

    return (
        <div className="dialog">
            <h1 className="text-center capitalize-first-letter fz22">{ title }</h1>
            <p className="text-center capitalize-first-letter fz17">{ description }</p>
            <div className="flex-justify-center">
                { children }
            </div>
        </div>
    );
}

export default Dialog;