import styled from 'styled-components';

export const StyledAvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  max-width: none;

  @media (min-width: 768px) {
    min-width: 200px;
    max-width: none;

    flex-direction: row;
    justify-content: flex-end;
    gap: ${p => p.theme.space[3]}px;
  }
`;

export const StyledUserNick = styled.p`
  margin: ${p => p.theme.space[0]}px;
  text-align: center;
`;

export const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 120px;

  gap: ${p => p.theme.space[4]}px;

  @media (min-width: 768px) {
    max-width: 1250px;

    flex-direction: row;
    justify-content: flex-start;
  }
  /* background-color: azure; */
`;
