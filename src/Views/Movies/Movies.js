import React, { useEffect, useState } from 'react';
import MoviesCard from '../../components/MoviesCard';
import { fetchMovies } from '../../services/movies';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies();
      console.log(data);
      setMovies(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} {...{ movie }} />
      ))}
    </div>
  );
}
