import React, { useEffect, useState } from "react";
import axios from "axios";

const StarWars = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get("https://swapi.dev/api/films");
                setResults(data.data.results);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    const showData = () => {
        return results.map((movie) => {
            return (
                <div key={movie.episode_id} className="movie-display">
                    <span className="movie-item-text">title: </span>
                    {movie.title},{" "}
                    <span className="movie-item-text">director: </span>
                    {movie.director}
                </div>
            );
        });
    };
    return <div>{showData()}</div>;
};

export default StarWars;
