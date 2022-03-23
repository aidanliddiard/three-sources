import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
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
        <li>
          <NavLink exact to="/directors">
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/countries">
            Countries
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
