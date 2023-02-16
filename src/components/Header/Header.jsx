import { Box } from 'components/Box';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box as="nav" display="flex" alignItems="center" gridGap={4}>
        <div>LOGO</div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </Box>
      <Box display="flex" alignItems="center" gridGap={4}>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Box>
    </Box>
  );
};

export default Header;
