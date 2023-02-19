import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Typography from '@mui/material/Typography';

import React from 'react';

const Logo = () => {
  return (
    <div>
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
        Phonebook
      </Typography>
    </div>
  );
};

export default Logo;
