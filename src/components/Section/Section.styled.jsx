import styled from 'styled-components';

export const SectionStyled = styled.section`
  margin-top: ${p => p.theme.space[5]}px;

  position: relative;
`;

export const SectionTitleStyled = styled.h2`
  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
