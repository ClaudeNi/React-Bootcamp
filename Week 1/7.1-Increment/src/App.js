import React from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {counter: 0};

    this.counterIncrease = this.counterIncrease.bind(this);
  }

  counterIncrease() {
    let newCounter = this.state.counter + 1;
    this.setState({counter: newCounter});
  }

  render() {
    return (
      <div className="App">
        <Counter text = "increment" onClick={this.counterIncrease} counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;