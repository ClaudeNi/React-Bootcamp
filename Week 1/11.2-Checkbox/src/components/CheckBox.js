import React from "react";

const CheckBox = (props) => {
  return (
    <div>
      <input type={"checkbox"} defaultChecked={props.isChecked}></input>
      {props.text}
    </div>
  );
};

export default CheckBox;
