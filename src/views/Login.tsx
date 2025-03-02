import React, { useState } from 'react';
import { Grid2, Box, TextField, Button, Typography, Tabs, Tab } from '@/libs/mui';
import { MuiTelInput } from 'mui-tel-input';

const Login: React.FC = () => {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [screen, setScreen] = useState<'login' | 'register' | 'forgotPassword' | 'code'>('login');

  const handleLogin = () => {
    console.log(loginMethod === 'phone' ? 'Telefone:' : 'Email:', identifier);
    console.log('Senha:', password);
  };

  const handleIdentifierChange = (value: string) => {
    setIdentifier(value);
  };

  const gridStyles = {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
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
    <Grid2 sx={gridStyles}>
      <Box sx={boxStyle}>
        {screen === 'login' && (
          <>
            <Typography variant="h5" gutterBottom align="center">
              Login
            </Typography>
            <Tabs
              value={loginMethod}
              onChange={(event, newValue) => setLoginMethod(newValue)}
              variant="fullWidth"
            >
              <Tab label="Email" value="email" />
              <Tab label="Telefone" value="phone" />
            </Tabs>
            {loginMethod === 'phone' ? (
              <MuiTelInput
                value={identifier}
                onChange={handleIdentifierChange}
                defaultCountry="BR"
                label="Telefone"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            ) : (
              <TextField
                required
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={identifier}
                onChange={(e) => handleIdentifierChange(e.target.value)}
              />
            )}
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
              value={identifier}
              onChange={handleIdentifierChange}
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
            <Typography onClick={() => setScreen('code')} sx={linkStyle}>
              Confirmar Código de Recuperação
            </Typography>
            <Typography onClick={() => setScreen('login')} sx={linkStyle}>
              Voltar para o login
            </Typography>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Enviar Código de Recuperação
            </Button>,
          </>
        )}

        {screen === 'code' && (
          <>
            <Typography variant="h5" gutterBottom align="center">
              Código de recuperação
            </Typography>
            <TextField required label="Código" variant="outlined" fullWidth margin="normal" />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Enviar Código
            </Button>
            <Typography onClick={() => setScreen('forgotPassword')} sx={linkStyle}>
              Voltar para Recuperar Senha
            </Typography>
          </>
        )}
      </Box>
    </Grid2>
  );
};

export default Login;