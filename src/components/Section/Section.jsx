import React from 'react';
import PropTypes from 'prop-types';

import { SectionStyled, SectionTitleStyled } from './Section.styled';
import { Container } from 'components/common/Container.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <Container>
        {title && <SectionTitleStyled>{title}</SectionTitleStyled>}

        {children}
      </Container>
    </SectionStyled>
  );
};

Section.propTypes = { title: PropTypes.string, children: PropTypes.any };

export default Section;
