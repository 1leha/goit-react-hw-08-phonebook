import { Divider, Paper, Typography } from '@mui/material';
import Section from 'components/Section';
import React from 'react';

export const Home = () => {
  return (
    <Section>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h3" component="h1">
          The Phonebook
        </Typography>
        <Typography variant="subtitle1" component="p" mb={2}>
          This is simple App to saving contacts. It uses a fake backend to store
          contacts, so don't add real user contacts to the database!
        </Typography>
        <Divider />
        <Typography variant="body1" component="p" mt={2} mb={1}>
          To get started - register or log in.
        </Typography>
        <Typography variant="body1" component="p" mb={4}>
          Then you can: add, edit or delete a contacts. You can sort the data
          and use the filter to find a contact. Contacts table is support a
          pagination option.
        </Typography>
        <Typography variant="h6" component="h3">
          Features:
        </Typography>
        <Typography variant="subtitle1" component="p" mb={4}>
          Registration and login forms with input error control. Check for the
          same contact is enabled. Sort contacts option.
        </Typography>
        <Typography variant="h6" component="h3">
          Technologies:
        </Typography>
        <Typography variant="subtitle2" component="p" mb={4}>
          React, Redux, RTK query, React Hook Form, Material UI.
        </Typography>
      </Paper>
    </Section>
  );
};
