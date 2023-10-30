import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ValidationError } from './ValidationError';
import { login } from '../../action/Account/AuthService'; // Import AuthService
import { Container, Typography, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';

type LoginData = {
  username: string;
  password: string;
};

const FieldStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
});

const ErrorStyle = styled('div')({
  color: 'red',
  marginBottom: '1rem',
});

export function LoginPage() {
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data: LoginData) => {
    try {
      const success = await login(data.username, data.password);
      if (success) {
        navigate('/home');
      } else {
        setLoginError('Incorrect username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const getEditorStyle = (fieldError: any) => {
    return fieldError ? { border: '1px solid #DC2626' } : {};
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <FieldStyle>
          <Typography variant="subtitle1">Username</Typography>
          <TextField
            type="text"
            {...register('username', { required: 'You must enter a username' })}
            style={getEditorStyle(errors.username)}
          />
          <ValidationError fieldError={errors.username} />
        </FieldStyle>
        <FieldStyle>
          <Typography variant="subtitle1">Password</Typography>
          <TextField
            type="password"
            {...register('password', { required: 'You must enter a password' })}
            style={getEditorStyle(errors.password)}
          />
          <ValidationError fieldError={errors.password} />
        </FieldStyle>
        <ErrorStyle>{loginError}</ErrorStyle>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
}
