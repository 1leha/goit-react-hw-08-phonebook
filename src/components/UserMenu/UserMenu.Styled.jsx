import styled from 'styled-components';

export const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 120px;

  position: absolute;
  top: 0;
  right: 0;

  gap: ${p => p.theme.space[4]}px;

  @media (min-width: 768px) {
    max-width: 300px;
    gap: ${p => p.theme.space[4]}px;

    flex-direction: row;
    justify-content: flex-start;
  }
  /* background-color: azure; */
`;

export const StyledAvatarContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  max-width: none;

  @media (min-width: 768px) {
    min-width: 200px;
    max-width: none;

    flex-direction: row-reverse;
    justify-content: flex-start;
    gap: ${p => p.theme.space[3]}px;
  }
`;

export const StyledUserNick = styled.p`
  margin: ${p => p.theme.space[0]}px;
  text-align: center;
`;
