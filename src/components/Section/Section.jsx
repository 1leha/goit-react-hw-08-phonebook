import React from 'react';
import PropTypes from 'prop-types';

import { SectionStyled, SectionTitleStyled } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      {title && <SectionTitleStyled>{title}</SectionTitleStyled>}

      {children}
    </SectionStyled>
  );
};

Section.propTypes = { title: PropTypes.string, children: PropTypes.any };

export default Section;
