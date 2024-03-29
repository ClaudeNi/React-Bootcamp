import React from "react";
import Btn from "./Btn";

const GameManagerCard = (props) => {
    const handleClick = () => {
        props.handleChangeEdit(props.id);
        console.log(props);
    };

    return (
        <div className="game-details-container">
            <img src={props.imgUrl} alt={props.name} />
            <span className="game-details-name">{props.name}</span>
            <div className="btns-container">
                <Btn text="Edit" clickHandle={handleClick} />
                <Btn
                    text="Delete"
                    clickHandle={() => {
                        props.handleButton2(props.id);
                    }}
                />
            </div>
        </div>
    );
};

export default GameManagerCard;
