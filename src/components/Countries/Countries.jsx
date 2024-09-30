import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then((data) => {
                setCountries(data);
                // console.log(countries);
            });
    }, []);

    const handleVisitedCountries = (country) => {
        console.log(`visited country`);
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
        // console.log(country);
        // setVisitedCountry(country);
        // console.log()
    }

    const handleFlags = flag => {
        // console.log('visited flag')
        // console.log(flag);
        const setFlags = [...visitedFlags,flag];
        setVisitedFlags(setFlags);
    };
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            {/* Display each visited country */}
            <h1>Visited Country: {visitedCountry.length}</h1>
            <div>
                {
                    visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </div>

            {/* Display visited flags */}
            <h3>Visited flags: {visitedFlags.length}</h3>

            <div className="flags-container">
                {
                    visitedFlags.map((flag,index)=><img src={flag} key={index}></img>)
                }
            </div>

            {/* Display each country */}
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        country={country} key={country.cca2}
                        handleVisitedCountries={handleVisitedCountries}
                        handleFlags={handleFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;