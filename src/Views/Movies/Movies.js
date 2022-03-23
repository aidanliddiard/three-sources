import React, { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import MoviesCard from '../../components/MoviesCard';
import { fetchMovies } from '../../services/movies';
import './Movies.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [director_id, setDirector_id] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies(director_id);
      setMovies(data);
    };
    fetchData();
  }, [director_id]);

  return (
    <div className="movies">
      <h1>Star Wars Movies</h1>
      <Dropdown director_id={director_id} setDirector_id={setDirector_id} />
      {movies.map((movie) => (
        <MoviesCard key={movie.id} {...{ movie }} />
      ))}
    </div>
  );
}
