import React from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

import type { LinkProps } from 'react-router-dom';

import './nav.scss';

export const Nav = () => {
  return (
    <nav>
      <h1>Blades Against Darkness</h1>
      <ul>
        <NavItem to='/'>Factions</NavItem>
        <NavItem to='/zones'>Zones</NavItem>

      </ul>
    </nav>
  )
}

const NavItem = ({children, to, ...props}: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true});

  return (
    <li>
      <Link
        style={{ textDecoration: match ? 'underline' : 'none'}}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}