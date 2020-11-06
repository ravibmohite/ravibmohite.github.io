import React from 'react';

export const Square = props=> {
        return (
            <button className={"square " + props.className} onClick={() => { props.onClick() }}>
                {props.value}
            </button>
        );
};
