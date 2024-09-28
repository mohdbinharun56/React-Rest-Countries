import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then((data)=>{
            setCountries(data);
            console.log(countries);
        });
    },[]);
    return (
        <div>
            <h1>Countries</h1> 
        </div>
    );
};

export default Countries;