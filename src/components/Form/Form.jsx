import { Box } from 'components/Box';
import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children, autoComplete, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete={autoComplete}>
      <Box display="flex" flexDirection="column" gridGap={4}>
        {children}
      </Box>
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.any.isRequired,
  autoComplete: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
