import React from "react";
import "./App.css";
import Btn from "./components/Btn";

class App extends React.Component {
  state = { color: "" };

  displayColors = (arr) => {
    return arr.map((clr) => {
      return (
        <Btn text={clr} color={clr} parentCallBack={this.handleCallback} />
      );
    });
  };

  handleCallback = (clr) => {
    this.setState({ color: clr });
  };

  render() {
    const colors = ["blue", "red", "yellow"];
    return (
      <div className="App">
        {this.displayColors(colors)}
        <div>The color selected is: {this.state.color}</div>
      </div>
    );
  }
}

export default App;
