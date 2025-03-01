import React, { useState } from 'react';
import { Grid2, Box, TextField, Button, Typography } from '@mui/material';
import HeaderPers from '../components/elementos/header.tsx';
import FooterPers from '../components/elementos/footer.tsx';
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    // Aqui pode entrar a integração com o Supabase para autenticação
  };

  const gridStyles = {
    height: '80vh',
    backgroundColor: '#E21111',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const boxStyle = {
    width: '100%',
    maxWidth: 400,
    borderRadius: 2,
    padding: 2,
    boxShadow: 3,
    backgroundColor: 'white',
  }

  const linkCreatAccountStyle = {
    color: "blue",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const resetPassowardStyles = {
    color: "blue",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      <HeaderPers />
      <Grid2 sx={gridStyles}>
        <Box sx={boxStyle}>
          <Typography variant="h5" gutterBottom align="center">
            Login
          </Typography>
          <TextField
            required
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography component={Link} to="/criar-conta" sx={linkCreatAccountStyle}>
            Crie conta aqui
          </Typography>
          <Typography component={Link} to="/criar-conta" sx={resetPassowardStyles}>
            Esqueceu a senha?
          </Typography>
          <Button variant="contained" color="primary" onClick={handleLogin} fullWidth sx={{ mt: 2 }}>
            Entrar
          </Button>
        </Box>
      </Grid2>
      <FooterPers />
    </>

  );
};

export default Login;
