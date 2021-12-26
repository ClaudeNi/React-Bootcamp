import React, { useState } from "react";

const Converter = () => {
    const [seconds, setSeconds] = useState("");
    const [minutes, setMinutes] = useState("");
    const [hours, setHours] = useState("");

    const handleSeconds = ({ target: { value } }) => {
        setSeconds(value);
        setMinutes(value / 60);
        setHours(value / 3600);
    };

    const handleMinutes = ({ target: { value } }) => {
        setSeconds(value * 60);
        setMinutes(value);
        setHours(value / 60);
    };

    const handleHours = ({ target: { value } }) => {
        setSeconds(value * 3600);
        setMinutes(value * 60);
        setHours(value);
    };

    return (
        <div className="converter">
            <div className="converter-item">
                Seconds:{" "}
                <input
                    value={seconds}
                    onChange={(e) => {
                        handleSeconds(e);
                    }}
                ></input>
            </div>
            <div className="converter-item">
                Minutes:{" "}
                <input
                    value={minutes}
                    onChange={(e) => {
                        handleMinutes(e);
                    }}
                ></input>
            </div>
            <div className="converter-item">
                Hours:{" "}
                <input
                    value={hours}
                    onChange={(e) => {
                        handleHours(e);
                    }}
                ></input>
            </div>
        </div>
    );
};

export default Converter;
