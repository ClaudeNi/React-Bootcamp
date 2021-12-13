import './App.css';
import Btn from './components/Btn';

function App() {
  return (
    <div className="App">
      <Btn className = "bold-text" text = "Important"/>
      <Btn text = "Not Important"/>
    </div>
  );
}

export default App;
