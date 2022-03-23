import React, { useEffect } from 'react';
import { fetchDirectors } from '../../services/directors';

export default function Directors() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDirectors();
      console.log(data);
    };
    fetchData();
  }, []);

  return <div><h2>Directors</h2>
  {Directors.map((director)
  </div>;
}
