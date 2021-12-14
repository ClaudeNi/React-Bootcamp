import React from "react";
import "../App.css";

const Box = (props) => {
  return (
    <div
      className={props.classes}
      style={{ background: "red", height: props.value, width: props.value }}
    ></div>
  );
};

export default Box;
