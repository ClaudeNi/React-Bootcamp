import React from 'react';
import './App.css';
import Btn from './components/Btn';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Btn className = "bold-text" text = "Important"/>
        <Btn text = "Not Important"/>
      </div>
    );
  }
}

export default App;
