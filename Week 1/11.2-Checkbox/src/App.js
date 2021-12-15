import React from "react";
import "./App.css";
import CheckBox from "./components/CheckBox";

class App extends React.Component {
  displayCheckBoxes = (arr) => {
    return arr.map((box) => {
      return <CheckBox text={box.text} isChecked={box.isChecked} />;
    });
  };

  render() {
    const checkboxes = [
      {
        text: "I read the term of the app",
        isChecked: false,
      },
      {
        text: "I accept the term of the app",
        isChecked: false,
      },
      {
        text: "I want to get the weekly news letter",
        isChecked: true,
      },
      {
        text: "I want to get sales and offers",
        isChecked: true,
      },
    ];
    return <div className="App">{this.displayCheckBoxes(checkboxes)}</div>;
  }
}

export default App;
