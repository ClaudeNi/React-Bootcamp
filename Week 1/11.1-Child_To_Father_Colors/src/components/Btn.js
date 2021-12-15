import React from "react";

const Btn = (props) => {
  return (
    <div>
      <button
        style={{ background: props.color }}
        onClick={() => {
          props.parentCallBack(props.color);
        }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Btn;
