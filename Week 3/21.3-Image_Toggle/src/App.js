import Img from "./components/Img";
import "./App.css";
import vatis from "./assets/imgs/Vatis.png";
import vatisBlack from "./assets/imgs/VatisBlack.png";
import vatisRockstar from "./assets/imgs/VatisRockstar.png";
import vatisRockstarBlack from "./assets/imgs/VatisRockstarBlack.png";

function App() {
    return (
        <div className="App">
            <Img imgBlackUrl={vatisBlack} imgNormalUrl={vatis} />
            <Img
                imgBlackUrl={vatisRockstarBlack}
                imgNormalUrl={vatisRockstar}
            />
        </div>
    );
}

export default App;
