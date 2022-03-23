import React from 'react';

export default function MoviesCard({ movie }) {
  const profit = Math.round((movie.box_office - movie.budget + Number.EPSILON) * 100) / 100;

  return (
    <div className="movies-card">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <p>
        <span className="bold">Budget: </span>${movie.budget} million
      </p>
      <p>
        <span className="bold">Box Office Sales: </span>${movie.box_office} million
      </p>
      <p>
        <span className="bold">Box Office Profits: </span>${profit} million
      </p>
    </div>
  );
}
