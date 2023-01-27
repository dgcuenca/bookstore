import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  const styleUser = { color: 'blue', fontSize: '3rem' };

  return (
    <nav className="navBar">
      <h1>Bookstore CMS</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div><FaUserCircle style={styleUser} /></div>
    </nav>
  );
};
export default NavBar;
