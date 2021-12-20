import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div className="App">
        <input ref={this.inputRef}></input>
      </div>
    );
  }
}

export default App;
