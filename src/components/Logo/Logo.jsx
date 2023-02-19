import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Typography from '@mui/material/Typography';

import React from 'react';
import { LogoText } from './Logo.Styled';

const Logo = () => {
  return (
    <Typography
      sx={{
        display: 'flex',
        alignItems: 'center',
        mr: 4,
        textDecoration: 'capitalise',
      }}
      variant="h6"
      id="tableTitle"
      component="div"
    >
      <ContactPhoneIcon fontSize="large" sx={{ mr: 1 }} />
      <LogoText>Phonebook</LogoText>
    </Typography>
  );
};

export default Logo;
