import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card src="https://picsum.photos/id/1002/200/300" title="Nasa" text="A picture from nasa"/>
      <Card src="https://picsum.photos/id/1003/200/300" title="Deer" text="A picture of a deeeeeer"/>
      <Card src="https://picsum.photos/id/1016/200/300" title="Nature" text="pretty nature"/>
    </div>
  );
}

export default App;
