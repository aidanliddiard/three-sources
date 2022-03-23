import React, { useEffect } from 'react';
import { fetchCountries } from '../../services/countries';

export default function Countries() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries();
      console.log(data);
    };
    fetchData();
  }, []);

  return <div>Countries</div>;
}
