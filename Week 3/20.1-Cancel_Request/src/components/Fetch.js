import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        const controller = new AbortController();
        setTimeout(async () => {
            const data = await axios.get("https://pokeapi.co/api/v2/pokemon/", {
                signal: controller.signal,
            });
            setResults(data.data.results);
        }, 1000);

        return () => {
            controller.abort();
        };
    }, []);

    const showFetchedData = () => {
        return results.map((pokemon, i) => {
            return (
                <div key={pokemon.name}>
                    {i} = {pokemon.name}
                </div>
            );
        });
    };

    return <div>{showFetchedData()}</div>;
};

export default Fetch;
