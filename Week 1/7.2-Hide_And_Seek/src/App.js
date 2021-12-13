import React from 'react';
import './App.css';
import Box from './components/Box';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {visible: false, visibleClass: "Square"};

    this.play = this.play.bind(this);
  }

  play() {
    let newState = !this.state.visible;
    this.setState({visible: newState});
    if (this.state.visible == true) {
      this.setState({visibleClass: "Square"});
    } else {
      this.setState({visibleClass: ""});
    }
  }

  render() {
    return (
      <div className="App">
        <Box onClick={this.play} visibleClass={this.state.visibleClass}/>
      </div>
    );
  }
}

export default App;