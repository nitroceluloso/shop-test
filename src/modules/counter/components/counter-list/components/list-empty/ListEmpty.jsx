import React from 'react';
import './ListEmpty.scss';

const ListEmpty = ({
    isFiltered = false
}) => {

    return (
        <div className="counter__empty-list">
            {
                !isFiltered &&
                <>
                    <h1 className="fz22 text-center"> No counters yet </h1>
                    <p className="fz17 text-center font-soft-black">
                        "When I started counting my blessings, my whole life turned around."
                    </p>
                    <p className="fz17 text-center font-soft-black">
                        —Willie Nelson
                    </p>
                </>
            }

            {
                isFiltered &&
                <p className="fz22 font-dark-silver"> No results </p>
            }
        </div>
    );
}

export default ListEmpty;
