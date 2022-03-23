import React, { useEffect, useState } from 'react';
import DirectorsCard from '../../components/DirectorsCard';
import { fetchDirectors } from '../../services/directors';

export default function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDirectors();
      console.log(data);
      setDirectors(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Directors</h2>
      {directors.map((director) => (
        <DirectorsCard key={director.id} {...{ director }} />
      ))}
    </div>
  );
}
