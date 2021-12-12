import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const data = ["hello", "world"];
    const number1 = 5;
    const number2 = 6;
    const string = "I love React!";

  return (
    <div>
        {data[0]} {data[1]}
        <br />
        {number1} + {number2} = {number1+number2}
        <br />
        The string's length is {string.length}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
