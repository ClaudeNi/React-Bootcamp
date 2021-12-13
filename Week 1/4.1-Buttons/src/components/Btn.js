import React from 'react';

const Btn = (props) => {
    return (
        <div>
            <button className={props.className}>{props.text}</button>
        </div>
    );
}

export default Btn;