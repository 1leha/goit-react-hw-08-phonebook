import { Outlet } from 'react-router-dom';

import * as React from 'react';
import Header from 'components/Header';
import { Box } from 'components/Box';

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        as="main"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100vw"
        height="100vh"
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
