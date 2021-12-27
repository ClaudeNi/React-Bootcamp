import React, { useEffect, useState } from "react";
import Btn from "./components/Btn";
import Spinner from "./components/Spinner/Spinner";
import axios from "axios";
import "./App.css";

const App = () => {
    const [categories, setCategories] = useState([]);
    const [joke, setJoke] = useState("");
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            setSpinner(true);
            try {
                const categoriesData = await axios.get(
                    "https://api.chucknorris.io/jokes/categories"
                );
                setCategories(categoriesData.data);
                setSpinner(false);
            } catch (e) {
                console.log(e);
            }
        };

        if (categories.length === 0) {
            fetchCategories();
        }
    }, [categories]);

    const handleClick = async (text) => {
        setSpinner(true);
        try {
            const results = await axios.get(
                "https://api.chucknorris.io/jokes/random",
                {
                    params: { category: text },
                }
            );
            setJoke(results.data.value);
            setSpinner(false);
        } catch (e) {
            console.log(e);
        }
    };

    const handleRandomClick = async () => {
        setSpinner(true);
        try {
            const results = await axios.get(
                "https://api.chucknorris.io/jokes/random"
            );
            setJoke(results.data.value);
            setSpinner(false);
        } catch (e) {
            console.log(e);
        }
    };

    const displayCategories = () => {
        return categories.map((name, i) => {
            return <Btn key={i} text={name} clickHandle={handleClick} />;
        });
    };

    if (spinner) {
        return <Spinner />;
    }

    return (
        <div className="App">
            <Btn text="random" clickHandle={handleRandomClick} />
            <div className="categories">{displayCategories()}</div>
            {joke}
        </div>
    );
};

export default App;
