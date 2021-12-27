import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
    const [countryName, setCountryName] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(
                    "https://restcountries.com/v2/all"
                );
                setResults(data.data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const data = await axios.get(
                    `https://restcountries.com/v2/name/${countryName}`
                );
                setResults(data.data);
            } catch (e) {
                console.log(e);
            }
        };
        if (countryName !== "") {
            fetchCountry();
        }
    }, [countryName]);

    const showData = () => {
        return results.map((country) => {
            return (
                <li key={country.alpha2Code} className="country-display">
                    {country.name}
                </li>
            );
        });
    };
    return (
        <div>
            <input
                value={countryName}
                onChange={(e) => {
                    setCountryName(e.target.value.toLowerCase());
                }}
            ></input>
            <ul>{showData()}</ul>
        </div>
    );
};

export default Countries;
