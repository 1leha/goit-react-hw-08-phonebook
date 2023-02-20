import { Box } from 'components/Box';
import React from 'react';

export const PageContainer = ({ children }) => {
  return (
    <Box
      width="100vw"
      height="75vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pr={4}
      pl={4}
    >
      {children}
    </Box>
  );
};
