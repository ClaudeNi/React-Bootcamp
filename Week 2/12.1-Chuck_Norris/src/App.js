import React from "react";
import Btn from "./components/Btn";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { joke: "" };

  handleClick = async (text) => {
    const results = await axios.get("https://api.chucknorris.io/jokes/random", {
      params: { category: text },
    });
    this.setState({ joke: results.data.value });
  };

  handleRandomClick = async () => {
    const results = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ joke: results.data.value });
  };
  render() {
    return (
      <div className="App">
        <Btn text="random" clickHandle={this.handleRandomClick} />
        <div className="categories">
          <Btn text="animal" clickHandle={this.handleClick} />
          <Btn text="food" clickHandle={this.handleClick} />
          <Btn text="money" clickHandle={this.handleClick} />
          <Btn text="science" clickHandle={this.handleClick} />
        </div>
        {this.state.joke}
      </div>
    );
  }
}

export default App;
