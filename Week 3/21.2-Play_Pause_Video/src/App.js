import "./App.css";
import { useRef } from "react";
import video from "./assets/video.mp4";

function App() {
    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <div className="App">
            excuse the bad voice quality, wanted to reduce the file size.
            <video ref={videoRef} width="1280" height="720">
                <source src={video} type="video/mp4" />
                Sorry your browser doesn't support embedded videos.
            </video>
            <div>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
    );
}

export default App;
