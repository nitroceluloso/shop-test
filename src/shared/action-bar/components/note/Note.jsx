import React from 'react';
import './Note.scss';

const Note = ({
    counterList = []
}) => {
    const counterListSelected = counterList.filter(el => el.isSelected);

    return (
        <div className="note">
            <div className="note__prepicked">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>

            <div className="note__content">
                {
                    counterListSelected.map( (el, idx) => <p key={idx} className="fz8">{el.count} x {el.title}</p>)
                }
            </div>
        </div>
    );
}

export default Note;