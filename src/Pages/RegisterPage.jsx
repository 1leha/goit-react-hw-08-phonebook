import { Button, TextField, Typography } from '@mui/material';
import { Box } from 'components/Box';

import React from 'react';
import { useForm } from 'react-hook-form';

import { messages } from 'components/settings/settings';
import { PageContainer } from 'components/common/PageContainer';
import Form from 'components/Form';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/auth.operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    console.log('user to register', JSON.stringify(data));
    dispatch(registerUser(data));
    reset();
  };

  return (
    <PageContainer>
      <Box minWidth="280px" display="flex" flexDirection="column" gridGap={4}>
        <Typography variant="h2" component="h2">
          Register, please
        </Typography>

        <Form autoComplete="on" noValidate onSubmit={handleSubmit(onSubmit)}>
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
        </Form>
      </Box>
    </PageContainer>
  );
};

// RegisterPage.propTypes = {}

export default RegisterPage;
