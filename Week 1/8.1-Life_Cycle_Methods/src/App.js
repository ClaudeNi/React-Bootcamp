import React from "react";
import "./App.css";

class App extends React.Component {
  state = { favoriteColor: "green" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" });
    }, 1000);
  }

  componentDidUpdate() {
    document.querySelector(
      "#box"
    ).textContent = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div className="App">
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="box"></div>
      </div>
    );
  }
}

export default App;
