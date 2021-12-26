import Text from "./components/Text";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Text text="Hello there world!" maxLength={10} />
        </div>
    );
}

export default App;
