import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  handleClick = () => {
    this.inputRef.current.select();
    navigator.clipboard.writeText(this.inputRef.current.value);
  };

  render() {
    return (
      <div className="App">
        <label>What is the meaning of life?</label>
        <textarea ref={this.inputRef}></textarea>
        <button onClick={this.handleClick}>Copy</button>
      </div>
    );
  }
}

export default App;
