import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/movies';

export default function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies();
      console.log(data);
    };
    fetchData();
  }, []);
  return <div>Main</div>;
}
