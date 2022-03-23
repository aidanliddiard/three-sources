import React from 'react';

export default function DirectorsCard({ director }) {
  return (
    <div>
      <h3>{director.name}</h3>
      <p>{director.birthdate}</p>
    </div>
  );
}
