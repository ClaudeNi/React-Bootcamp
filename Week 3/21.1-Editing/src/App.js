import "./App.css";
import { useRef, useState } from "react";

function App() {
    const [showInput, setShowInput] = useState(false);
    const [text, setText] = useState("");
    const inputRef = useRef();

    const handleClick = () => {
        setShowInput(!showInput);
        if (showInput) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="App">
            {showInput ? (
                <input
                    ref={inputRef}
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                ></input>
            ) : (
                text
            )}
            <button onClick={handleClick}>{showInput ? "Save" : "Edit"}</button>
        </div>
    );
}

export default App;
