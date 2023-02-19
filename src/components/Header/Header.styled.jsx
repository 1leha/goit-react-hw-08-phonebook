import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  background-color: #eee;
`;

export const Wraper = styled.div`
  position: relative;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 560px) {
    height: 110px;
  }

  @media (min-width: 768px) {
    height: 60px;
    flex-direction: row;
    justify-content: flex-start;
  }

  /* background-color: #eee; */
`;

export const UserBlockStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  /* padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px; */
`;
