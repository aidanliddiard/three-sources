import React from 'react';
import Movies from '../Views/Movies/Movies';

export default function MoviesCard({ movie }) {
  return (
    <div className="movies-card">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <p>Budget: ${movie.budget} million</p>
      <p>Box Office Sales: ${movie.box_office} million</p>
    </div>
  );
}
