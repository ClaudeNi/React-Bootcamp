import Fetch from "./components/Fetch";
import "./App.css";
import { useState } from "react";

function App() {
    const [showFetch, setShowFetch] = useState(false);

    const handleClick = () => {
        setShowFetch(!showFetch);
    };

    return (
        <div className="App">
            <button onClick={handleClick}>Fetch and Show</button>
            {showFetch && <Fetch />}
        </div>
    );
}

export default App;
