import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../services/countries';
import CountryCard from '../../components/CountryCard';

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries();
      console.log(data);
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      {countries.map((country) => (
        <CountryCard key={country.id} {...{ country }} />
      ))}
      ;
    </div>
  );
}
