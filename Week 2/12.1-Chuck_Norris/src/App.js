import React from "react";
import Btn from "./components/Btn";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { categories: [], joke: "" };

  async componentDidMount() {
    const categoriesData = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categories: categoriesData.data });
  }

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

  displayCategories = () => {
    return this.state.categories.map((name, i) => {
      return <Btn key={i} text={name} clickHandle={this.handleClick} />;
    });
  };
  render() {
    return (
      <div className="App">
        <Btn text="random" clickHandle={this.handleRandomClick} />
        <div className="categories">{this.displayCategories()}</div>
        {this.state.joke}
      </div>
    );
  }
}

export default App;
