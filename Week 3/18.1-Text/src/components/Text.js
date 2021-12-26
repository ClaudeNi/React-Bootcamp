import React, { useState } from "react";

const Text = (props) => {
    const [shownText, setShownText] = useState(
        props.text.slice(0, props.maxLength)
    );
    const [showAllText, setShowAllText] = useState(false);
    const [buttonText, setButtonText] = useState("...show more");

    const handleShowText = () => {
        if (showAllText) {
            setShownText(props.text.slice(0, props.maxLength));
            setButtonText("...show more");
            setShowAllText(false);
        } else {
            setShownText(props.text);
            setButtonText("show less");
            setShowAllText(true);
        }
    };

    return (
        <div className="text">
            {shownText}
            <div onClick={handleShowText} className="show-btn">
                {buttonText}
            </div>
        </div>
    );
};

export default Text;
