import { Box } from 'components/Box';
import React from 'react';

export const PageContainer = ({ children }) => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};
