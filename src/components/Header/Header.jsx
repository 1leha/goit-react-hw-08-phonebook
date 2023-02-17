import { Box } from 'components/Box';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

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
        {isLoggedIn && !isRefreshing && (
          <NavLink to="/contacts">Contacts</NavLink>
        )}
      </Box>

      {/* User Menu */}
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Box display="flex" alignItems="center" gridGap={4}>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </Box>
      )}
    </Box>
  );
};

export default Header;
