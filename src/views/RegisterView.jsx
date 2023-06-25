import { Box, Button, Container, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Container component="main" maxWidth="xs">
      <h1>Create Account</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          type="text"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={name}
          onChange={handleChange}
        />
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
          type="password"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          autoComplete="current-password"
          autoFocus
          value={password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Create Account
        </Button>
      </Box>
    </Container>
  );
}
