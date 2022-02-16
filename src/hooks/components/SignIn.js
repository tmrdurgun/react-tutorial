import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const theme = createTheme();

export default function SignIn(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const validateForm = (email, password) => {
    return validateEmail(email) && validatePassword(password);
  }

  useEffect(() => {
    if (email && password) {

      const validateFormTimeout = setTimeout(() => {
        const isFormValid = validateForm(email, password);
        console.log('isFormValid: ', isFormValid);
      }, 2000);

      return () => {
        clearTimeout(validateFormTimeout);
      }
    }

  }, [email, password, validateForm]);

  const handleSubmit = () => {
    props.handleLogin({ email, password });
  };

  const validateEmail = (email) => {
    return email.indexOf('@') !== -1 && email.indexOf('.') !== -1;
  }

  const validatePassword = (password) => {
    return password.length >= 6;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              error={(email && !validateEmail(email)) ? true : false}
              helperText={email && !validateEmail(email) && 'Please enter a valid email!'}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              error={(password && !validatePassword(password)) ? true : false}
              helperText={password && !validatePassword(password) && 'Password field can not be lesser then 6 characters!'}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleSubmit()}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}