import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country);
    const {name,flags,area,population,cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = ()=>{
        // setVisited(true);
        setVisited(!visited);
    }
    return (
        <div className="country">
             <img src={flags.png} alt={name.common} width="100px" />
            <h3>Name:{name.common}</h3>
            <p>area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited} className='btn-visited'>{visited ? 'Visited' : 'Click to visit'}</button>
            {/* {visited && 'visited this countrt'} */}
            {visited ? 'visited this country' : 'Click if you want to visit'}
            {/* <p>Language: {languages.eng}</p> */}
           
        </div>
    );
};

export default Country;