import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoText = styled.span`
  display: inline-block;

  @media (min-width: 400px) {
    display: inline-block;
  }
`;

export const StyledLink = styled(Link)`
  z-index: 1;

  display: inline-block;
  width: fit-content;
  text-decoration: none;
  color: ${p => p.theme.colors.third};
`;
