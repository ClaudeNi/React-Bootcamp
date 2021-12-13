import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {counter: 0, color: "black"};

    this.counterColor = this.counterColor.bind(this);
    this.counterIncrease = this.counterIncrease.bind(this);
    this.counterDecrease = this.counterDecrease.bind(this);
  }

  counterColor(num) {
    if (num === 0) {
      this.setState({color: "black"});
    } else if (num > 0) {
      this.setState({color: "green"});
    } else {
      this.setState({color: "red"});
    }
  }

  counterIncrease() {
    const tempCounter = this.state.counter;
    if (tempCounter < 10) {
      let newCounter = this.state.counter + 1;
      this.counterColor(newCounter);
      this.setState({counter: newCounter});
    }
  }

  counterDecrease() {
    const tempCounter = this.state.counter;
    if (tempCounter > -10) {
      let newCounter = this.state.counter - 1;
      this.counterColor(newCounter);
      this.setState({counter: newCounter});
    }
  }

  render() {
    return (
      <div className="App">
        <button className='btn' onClick={this.counterIncrease}>Increment</button>
        <span style={{color: this.state.color}}>{this.state.counter}</span>
        <button className='btn' onClick={this.counterDecrease}>Decrement</button>
      </div>
    );
  }
}

export default App;