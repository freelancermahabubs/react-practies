import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from './Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);

  return (
    <div>
      <h1>Welcome To Our WorldS: {countries.length}</h1>
      <div className='country-container'>
       
       {
        countries.map(country => console.log(country))
       }
        {
          countries.map(country => <Country
          key={country.cca3}
          country = {country}
          ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;