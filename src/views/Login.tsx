import React, { useState } from 'react';
import styles from '@/styles/Login.module.scss';
import { Grid2, Box, TextField, Button, Typography, Tabs, Tab } from '@/libs/mui';
import { MuiTelInput } from 'mui-tel-input';
import AlertDiagPers from '@/components/elementos/alertDiagPers.tsx';

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

  return (
      <Grid2 className={styles.mainContainer}>
        <AlertDiagPers message={"Ainda não foi adicionado sistema de criação de contas"}/>
        <Box className={styles.box}>
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
              <Typography onClick={() => setScreen('register')} className={styles.link}>
                Criar conta
              </Typography>
              <Typography onClick={() => setScreen('forgotPassword')} className={styles.link}>
                Esqueceu a senha?
              </Typography>
              <Button variant="contained" color="primary" onClick={handleLogin} fullWidth className={styles.button}>
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
              <Button variant="contained" color="primary" fullWidth className={styles.button}>
                Cadastrar
              </Button>
              <Typography onClick={() => setScreen('login')} className={styles.link}>
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
              <Typography onClick={() => setScreen('code')} className={styles.link}>
                Confirmar Código de Recuperação
              </Typography>
              <Typography onClick={() => setScreen('login')} className={styles.link}>
                Voltar para o login
              </Typography>
              <Button variant="contained" color="primary" fullWidth className={styles.button}>
                Enviar Código de Recuperação
              </Button>
            </>
          )}
          {screen === 'code' && (
            <>
              <Typography variant="h5" gutterBottom align="center">
                Código de recuperação
              </Typography>
              <TextField required label="Código" variant="outlined" fullWidth margin="normal" />
              <Button variant="contained" color="primary" fullWidth className={styles.button}>
                Enviar Código
              </Button>
              <Typography onClick={() => setScreen('forgotPassword')} className={styles.link}>
                Voltar para Recuperar Senha
              </Typography>
            </>
          )}
        </Box>
      </Grid2>
  );
};

export default Login;
