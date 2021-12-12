import React from "react";
import ReactDOM from "react-dom";
import Box1 from "./box";

const App = () => {

  return (
      <div style={{height: "1000px", width: "1400px"}}>
            <Box1/>
      </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
