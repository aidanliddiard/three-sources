import React from 'react';

export default function CountryCard({ country }) {
  return (
    <div>
      <h3>{country.name}</h3>
      <p>
        <span className="bold">Capital: </span>
        {country.capital}
      </p>
      <p>
        <span className="bold">Population: </span>
        {country.population}
      </p>
      <p>
        <span className="bold">Fun Fact: </span>
        {country.fact}
      </p>
    </div>
  );
}
