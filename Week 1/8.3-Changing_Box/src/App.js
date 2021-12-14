import React from "react";
import "./App.css";
import Box from "./components/Box";

class App extends React.Component {
  state = { counter: -1, color: "rgb(255, 0, 0)", classes: "box" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ counter: 0 });
    }, 0);
  }

  componentDidUpdate() {
    setTimeout(() => {
      const num1 = Math.floor(Math.random() * 255);
      const num2 = Math.floor(Math.random() * 255);
      const num3 = Math.floor(Math.random() * 255);
      this.setState({
        counter: this.state.counter + 1,
        color: `rgb(${num1}, ${num2}, ${num3})`,
      });
      if (this.state.counter === 5) {
        this.setState({ classes: "circle" });
      }
    }, 500);
  }

  render() {
    return (
      <div className="App">
        <Box color={this.state.color} classes={this.state.classes} />
      </div>
    );
  }
}

export default App;
