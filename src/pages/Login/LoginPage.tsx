import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ValidationError } from './ValidationError';
import { login } from '../../action/Account/AuthService';
import { Container, Typography, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useUser } from './UserContext';
type LoginData = {
  username: string;
  password: string;
};
const LoginFormStyle = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  paddingTop: '50px',
});
const FieldStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
});

const ErrorStyle = styled('div')({
  color: 'red',
  marginBottom: '1rem',
});

const EditorStyle = (fieldError: any) => ({
  borderRadius: '2px',
  width: '400px',
});
const TitleStyle = styled(Typography)({
  textAlign: 'center',
  paddingTop: '50px',
});

export function LoginPage() {
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setUser } = useUser();
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
        setUser(data.username);
        navigate('/home');
      } else {
        setLoginError('Incorrect username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Container>
      <TitleStyle variant="h4">Login</TitleStyle>
      <LoginFormStyle>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <FieldStyle>
            <Typography variant="subtitle1">Username</Typography>
            <TextField
              type="text"
              {...register('username', { required: 'You must enter a username' })}
              style={EditorStyle(errors.username)}
            />
            <ValidationError fieldError={errors.username} />
          </FieldStyle>
          <FieldStyle>
            <Typography variant="subtitle1">Password</Typography>
            <TextField
              type="password"
              {...register('password', { required: 'You must enter a password' })}
              style={EditorStyle(errors.password)}
            />
            <ValidationError fieldError={errors.password} />
          </FieldStyle>
          <ErrorStyle>{loginError}</ErrorStyle>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </LoginFormStyle>
    </Container>
  );
}
