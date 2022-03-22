import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
