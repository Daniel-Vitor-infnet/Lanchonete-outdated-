import React, { useState } from 'react';
import { Grid2, Box, TextField, Button, Typography } from '@mui/material';
import HeaderPers from '../components/elementos/header.tsx';
import FooterPers from '../components/elementos/footer.tsx';
import { MuiTelInput } from 'mui-tel-input';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [screen, setScreen] = useState<'login' | 'register' | 'forgotPassword'>('login');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  const gridStyles = {
    height: '80vh',
    backgroundColor: '#E21111',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const boxStyle = {
    width: '100%',
    maxWidth: 400,
    borderRadius: 2,
    padding: 2,
    boxShadow: 3,
    backgroundColor: 'white',
  };

  const linkStyle = {
    color: "blue",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8px'
  };

  return (
    <>
      <HeaderPers />
      <Grid2 sx={gridStyles}>
        <Box sx={boxStyle}>
          {screen === 'login' && (
            <>
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
              <Typography onClick={() => setScreen('register')} sx={linkStyle}>
                Criar conta
              </Typography>
              <Typography onClick={() => setScreen('forgotPassword')} sx={linkStyle}>
                Esqueceu a senha?
              </Typography>
              <Button variant="contained" color="primary" onClick={handleLogin} fullWidth sx={{ mt: 2 }}>
                Entrar
              </Button>
            </>
          )}

          {screen === 'register' && (
            <>
              <Typography variant="h5" gutterBottom align="center">
                Criar Conta
              </Typography>
              <TextField required label="Nome" variant="outlined" fullWidth margin="normal" />
              <MuiTelInput
                value={phone}
                onChange={handlePhoneChange}
                defaultCountry="BR"
                label="Telefone"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField required label="Email" variant="outlined" fullWidth margin="normal" />
              <TextField required label="Senha" type="password" variant="outlined" fullWidth margin="normal" />
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Cadastrar
              </Button>
              <Typography onClick={() => setScreen('login')} sx={linkStyle}>
                Já tem uma conta? Faça login
              </Typography>
            </>
          )}

          {screen === 'forgotPassword' && (
            <>
              <Typography variant="h5" gutterBottom align="center">
                Recuperar Senha
              </Typography>
              <TextField required label="Email" variant="outlined" fullWidth margin="normal" />
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Enviar Link de Recuperação
              </Button>
              <Typography onClick={() => setScreen('login')} sx={linkStyle}>
                Voltar para o login
              </Typography>
            </>
          )}
        </Box>
      </Grid2>
      <FooterPers />
    </>
  );
};

export default Login;
