import React from 'react';
import NavLink from './NavLink';

/** [DUMB] Creates a Nav component. */
const Nav = () => (
  <nav className="nav">
    <NavLink to="/" brand>ReactSpeed</NavLink>
    <NavLink to="/book">Book</NavLink>
    <NavLink to="/roadmap">Roadmap</NavLink>
    <NavLink
      href="https://github.com/manavsehgal/react-speed-book">
        Code
    </NavLink>
    <NavLink
      href="https://manavsehgal.github.io/react-speed-demos/">
        Demos
    </NavLink>
    <NavLink href="https://reactspeed.com">
      Website
    </NavLink>
  </nav>
);

export default Nav;
