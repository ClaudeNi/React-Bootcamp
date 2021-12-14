import React from "react";
import "../App.css";

const Box = (props) => {
  return (
    <div className={props.classes} style={{ background: props.color }}></div>
  );
};

export default Box;
