import React from 'react';

export default function Dropdown({ director_id, setDirector_id }) {
  return (
    <select value={director_id} onChange={(e) => setDirector_id(e.target.value)}>
      <option value="All">All</option>
      <option value="1">George Lucas</option>
      <option value="2">Irvin Kershner</option>
      <option value="3">Richard Marquand</option>
      <option value="4">J.J. Abrams</option>
      <option value="5">Rian Johnson</option>
      <option value="6">Dave Filoni</option>
      <option value="7">Gareth Edwards</option>
      <option value="8">Ron Howard</option>
      <option value="9">Patty Jenkins</option>
    </select>
  );
}
