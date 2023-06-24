import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Box, TextField } from '@mui/material';
import authOperations from '../redux/auth/authOperations';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <h1>Sing In</h1>

      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        oValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          type="email"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleChange}
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
          value={password}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </Box>
    </Container>
  );
}
