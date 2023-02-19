import { Box } from 'components/Box';
import { Container } from 'components/common/Container.styled';
import Logo from 'components/Logo';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth';
import { HeaderStyled, UserBlockStyled, Wraper } from './Header.styled';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <HeaderStyled>
      <Container>
        <Wraper>
          <Logo />
          <Box
            as="nav"
            display="flex"
            alignItems="center"
            gridGap={4}
            flex="0 0 auto"
          >
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && !isRefreshing && (
              <NavLink to="/contacts">Contacts</NavLink>
            )}
          </Box>

          {/* User Menu */}
          <UserBlockStyled>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <Box display="flex" alignItems="center" gridGap={4}>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
              </Box>
            )}
          </UserBlockStyled>
        </Wraper>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
