import React, { useEffect, useState } from 'react';
import MoviesCard from '../../components/MoviesCard';
import { fetchMovies } from '../../services/movies';
import './Movies.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <div className="movies">
      <h1>Star Wars Movies</h1>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} {...{ movie }} />
      ))}
    </div>
  );
}
