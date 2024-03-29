import React from "react";
import "./App.css";
import Spinner from "./components/Spinner";

class App extends React.Component {
  state = { timer: 5, show: true, classes: "container" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ timer: this.state.timer - 1 });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.timer >= 0) {
      setTimeout(() => {
        this.setState({ timer: this.state.timer - 1 });
        if (this.state.timer === 0) {
          this.setState({ show: false });
        }
      }, 1000);
    }
  }

  render() {
    return <div className="App">{this.state.show && <Spinner />}</div>;
  }
}

export default App;
