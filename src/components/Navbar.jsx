import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/cart">Корзина ({cartCount})</Link>
    </nav>
  );
};

export default Navbar;