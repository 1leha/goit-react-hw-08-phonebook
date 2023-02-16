import { Button, TextField } from '@mui/material';
import { Box } from 'components/Box';

import React from 'react';
import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types'

import { messages } from 'components/settings/settings';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  // const handelSubmit = e => {
  //   e.preventDefault();
  //   console.log('submit');
  // };

  return (
    <Box
      as="form"
      autoComplete="on"
      minWidth="320px"
      // maxWidth="1000px"
      // width="600px"
      display="flex"
      flexDirection="column"
      gridGap={4}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <input
        {...register('name', {
          required: {
            value: 'ERROR',
          },
          pattern: {
            value:
              /^[a-zA-Zа-яА-Я]+(([' -][a - zA - Zа - яА - Я])?[a - zA - Zа - яА - Я]*) *$/,
            message: 'error in Pattern',
          },
        })}
      />
      {errors.name && <p role="alert">{errors.name?.message}</p>} */}

      <TextField
        required
        id="name"
        label="User name"
        variant="standard"
        fullWidth={true}
        {...register('name', {
          required: {
            value: true,
            message: messages.isRequired,
          },
          pattern: {
            value:
              /^[a-zA-Zа-яА-Я]+(([' -][a - zA - Zа - яА - Я])?[a - zA - Zа - яА - Я]*) *$/,
            message: messages.wrongInput,
          },
        })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        required
        id="email"
        type="email"
        label="E-mail"
        variant="standard"
        fullWidth={true}
        {...register('email', {
          required: {
            value: true,
            message: messages.isRequired,
          },
          pattern: {
            value:
              /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
            message: messages.wrongInput,
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        required
        id="password"
        type="password"
        label="Password"
        variant="standard"
        fullWidth={true}
        {...register('password', {
          required: {
            value: true,
            message: messages.isRequired,
          },
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button type="submit" fullWidth={true} variant="contained">
        Register user
      </Button>
    </Box>
  );
};

// RegisterPage.propTypes = {}

export default RegisterPage;
