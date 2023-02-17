import { Button, TextField } from '@mui/material';
import { Box } from 'components/Box';

import React from 'react';
import { useForm } from 'react-hook-form';

import { messages } from 'components/settings/settings';
import { PageContainer } from 'components/common/PageContainer';
import Form from 'components/Form';
import { login } from 'redux/auth/auth.operations';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    dispatch(login(data));
    reset();
  };

  return (
    <PageContainer>
      <Box minWidth="320px" display="flex" flexDirection="column" gridGap={4}>
        <h3>Login, please</h3>
        <Form autoComplete="on" noValidate onSubmit={handleSubmit(onSubmit)}>
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
            Login
          </Button>
        </Form>
      </Box>
    </PageContainer>
  );
};

export default LoginPage;
