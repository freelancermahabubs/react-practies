import React from 'react';
import './Country.css'

const Country = (props) => {
  const {name, capital, flags, population, region, area} = props.country;
  return (
    <div className='country'>
      <h1>Name: {name.common}</h1>
      <h5>Capital: {capital}</h5>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;