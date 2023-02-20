import { Typography } from '@mui/material';
import { Box } from 'components/Box';
import { Container } from 'components/common/Container.styled';
import Logo from 'components/Logo';
import { StyledLink } from 'components/Logo/Logo.Styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth';
import {
  StyledHeader,
  StyledRegisterBlock,
  StyledRegistredLinks,
  StyledTab,
  StyledTabsContainer,
  StyledUserBlock,
  Wraper,
} from './Header.styled';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <StyledHeader>
      <Container>
        <Wraper>
          {/* Logo block */}
          <StyledLink to="/">
            <Box>
              <Logo />

              <Typography component="div" fontSize="10px" letterSpacing={1.4}>
                save contacts since 2023
              </Typography>
            </Box>
          </StyledLink>

          {/* Tabs block */}
          <StyledTabsContainer>
            <StyledTab to="/">Home</StyledTab>
            {isLoggedIn && !isRefreshing && (
              <StyledTab to="/contacts">Contacts</StyledTab>
            )}
          </StyledTabsContainer>

          {/* User Menu */}
          <StyledUserBlock>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <StyledRegisterBlock>
                <StyledRegistredLinks to="/register">
                  Register
                </StyledRegistredLinks>
                <StyledRegistredLinks to="/login">Login</StyledRegistredLinks>
              </StyledRegisterBlock>
            )}
          </StyledUserBlock>
        </Wraper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
