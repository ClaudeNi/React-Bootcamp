import React from "react";
import "./App.css";
import CustomForm from "./components/CustomForm";
import Result from "./components/Result";

class App extends React.Component {
  state = { showForm: true, showResult: false, submitForm: false };

  flipShowcase = () => {
    this.setState((state) => {
      return { showResult: !state.showResult };
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.showForm && (
          <CustomForm callBackParent={this.flipShowcase} />
        )}
        {this.state.showResult && <Result callBackParent={this.flipShowcase} />}
      </div>
    );
  }
}

export default App;
