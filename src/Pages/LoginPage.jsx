import { Button, TextField, Typography } from '@mui/material';
import { Box } from 'components/Box';
import React from 'react';
import { useForm } from 'react-hook-form';
import { messages } from 'components/settings/settings';
import { PageContainer } from 'components/common/PageContainer';
import Form from 'components/Form';
import { login } from 'redux/auth/auth.operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    await dispatch(login(data)).unwrap();
    navigate('/contacts');

    reset();
  };

  return (
    <PageContainer>
      <Box minWidth="280px" display="flex" flexDirection="column" gridGap={4}>
        <Typography variant="h2" component="h2">
          Login, please
        </Typography>
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
