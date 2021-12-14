import React from "react";
import "./App.css";
import Box from "./components/Box";

class App extends React.Component {
  state = { classes: "box" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ classes: "box box-animation" });
    }, 1000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ classes: "box" });
    }, 4000);
  }

  render() {
    return (
      <div className="App">
        <Box value="500px" classes={this.state.classes} />
        <Box value="100px" classes={this.state.classes} />
        <Box value="300px" classes={this.state.classes} />
      </div>
    );
  }
}

export default App;
