import { Box } from 'components/Box';
import React from 'react';

const Form = ({ children, autoComplete, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete={autoComplete}>
      <Box display="flex" flexDirection="column" gridGap={4}>
        {children}
      </Box>
    </form>
  );
};

export default Form;
