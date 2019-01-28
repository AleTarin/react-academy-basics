import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ tags: [t1, t2] }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/welcome">{t1}</Link></li>
        <li><Link to="/card/propagation">{t2}</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;