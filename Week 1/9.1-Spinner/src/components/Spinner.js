import React from "react";
import "../App.css";

const Spinner = (props) => {
  return (
    <div className={props.classes}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
