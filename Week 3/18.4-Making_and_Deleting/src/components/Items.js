import React, { useState } from "react";

const Items = () => {
    const arr = ["one", "two", "three", "four", "five"];

    const [isChecked, setIsChecked] = useState(() => {
        const newChecked = {};
        for (let i of arr) {
            newChecked[i] = false;
        }
        return newChecked;
    });
    const [modArr, setModArr] = useState([...arr]);

    const displayItems = () => {
        return modArr.map((item, i) => {
            return (
                <li key={i} className="item">
                    <input
                        type={"checkbox"}
                        onClick={() => {
                            handleCheckChange(item);
                        }}
                        checked={isChecked[item]}
                        onChange={() => {
                            handleCheckChange(item);
                        }}
                    ></input>
                    {item}
                </li>
            );
        });
    };

    const handleCheckChange = (item) => {
        const newChecked = { ...isChecked };
        if (isChecked[item] === true) {
            newChecked[item] = false;
        } else {
            newChecked[item] = true;
        }
        setIsChecked(newChecked);
    };

    const handleDelete = () => {
        let newArr = [...modArr];
        newArr = newArr.filter((item) => isChecked[item] === false);
        setModArr(newArr);
        resetChecks();
    };

    const handleReset = () => {
        setModArr([...arr]);
        resetChecks();
    };

    const resetChecks = () => {
        const newChecked = {};
        for (let i of arr) {
            newChecked[i] = false;
        }
        setIsChecked(newChecked);
    };

    return (
        <div className="item">
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <ul className="item-list">{displayItems()}</ul>
        </div>
    );
};

export default Items;
