import React from "react";

const Btn = (props) => {
    return (
        <div onClick={props.clickHandle} className={"btn " + props.classes}>
            {props.text}
        </div>
    );
};

export default Btn;
