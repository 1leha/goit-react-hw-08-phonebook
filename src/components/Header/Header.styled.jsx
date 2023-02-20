import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.formBG};
`;

export const Wraper = styled.div`
  position: relative;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 400px) {
    height: 110px;
  }

  @media (min-width: 768px) {
    height: 60px;
    flex-direction: row;
    justify-content: flex-start;
  }

  /* background-color: #eee; */
`;

export const StyledUserBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  /* border: 2px solid; */
`;

// Login | Reguster menu
export const StyledRegisterBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  /* padding: ${p => p.theme.space[4]}px; */
  min-width: 280px;

  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 400px) {
    min-width: 150px;
    flex-direction: column;

    top: 0;
    left: 100%;
    transform: translate(-100%, 0%);

    gap: ${p => p.theme.space[3]}px;
  }

  @media (min-width: 768px) {
    min-width: 250px;
    flex-direction: row;

    top: 0;
    left: 100%;
    transform: translate(-100%, 0%);

    gap: ${p => p.theme.space[3]}px;
  }
  /* background-color: aqua; */
`;

export const StyledRegistredLinks = styled(NavLink)`
  display: block;

  flex: 1 1 auto;

  padding: ${p => p.theme.space[3]}px;

  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.s};

  color: ${p => p.theme.colors.fourth};
  background-color: ${p => p.theme.colors.unfocused};
  border-radius: ${p => p.theme.radii.standart};
  border: 1px solid;

  transition: ${p => p.theme.transitions.standart};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hover};
  }

  &.active {
    cursor: default;
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadows.standart};

    border-top-left-radius: ${p => p.theme.radii.standart};
    border-top-right-radius: ${p => p.theme.radii.standart};
  }

  @media (min-width: 400px) {
    flex: 0 1 auto;
  }

  @media (min-width: 768px) {
    flex: 1 1 auto;
  }
`;

// Tabs
export const StyledTabsContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 0 auto;

  padding-top: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  position: absolute;
  top: ${p => p.theme.space[4]}px;

  gap: ${p => p.theme.space[0]}px;
  position: relative;
  overflow: hidden;

  @media (min-width: 400px) {
    padding-top: ${p => p.theme.space[2]}px;

    max-width: 250px;
  }
  @media (min-width: 768px) {
    padding-top: ${p => p.theme.space[4]}px;

    width: 400px;
  }
`;

export const StyledTab = styled(NavLink)`
  display: block;
  z-index: 1;
  flex: 1 1 auto;

  padding: ${p => p.theme.space[4]}px;

  text-decoration: none;
  color: ${p => p.theme.colors.fourth};
  background-color: ${p => p.theme.colors.unfocused};

  border-top-left-radius: ${p => p.theme.radii.standart};
  border-top-right-radius: ${p => p.theme.radii.standart};

  transition: ${p => p.theme.transitions.standart};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hover};
  }

  &.active {
    cursor: default;
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadows.standart};

    border-top-left-radius: ${p => p.theme.radii.standart};
    border-top-right-radius: ${p => p.theme.radii.standart};
  }

  @media (min-width: 400px) {
    flex: 0 1 auto;
  }
`;
