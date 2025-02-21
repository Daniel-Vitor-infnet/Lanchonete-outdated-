import { useState } from 'react';
import { Button, Card, Grid, Typography, TextField, Avatar } from "../components";
import user from "../assets/img/User.png";
import { signIn } from '../services/authentication';
import { useAppContext } from "../Context";
import { handleChange } from '../utils/function';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    const { showSnackMessage, showAlertMessage, supabase } = useAppContext();

    const [data, setData] = useState({
        email: {
            value: "",
            error: null,
            helperText: null,
        },
        password: {
            value: "",
            error: null,
            helperText: null,
        },
    });

    const verifyLogin = async () => {
        let { data: response, error } = await signIn(data.email.value, data.password.value, supabase);

        if (error && error.message === "Invalid login credentials") {
            showSnackMessage("Dados de usuário inválidos");
        } else {
            localStorage.setItem("session", JSON.stringify(response.session));
            localStorage.setItem("user", JSON.stringify(response.user));
            navigate("/");
        }
    };



    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ minHeight: "100vh", backgroundColor: "#F5F5F5", padding: 4 }}>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar sx={{ width: 100, height: 100 }} src={user} />
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h4" align="center">
                    Bem-vindo!
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="body1" align="center" color="textSecondary">
                    Faça login para continuar
                </Typography>
            </Grid>

            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} container justifyContent="center"><Grid item xs={12} sm={6} md={4}><TextField label="E-mail" type="email" fullWidth required variant="outlined" onChange={(event) => handleChange(data, setData, event.target.value, "email")} value={data.email.value} /></Grid></Grid>
                <Grid item xs={12} container justifyContent="center"><Grid item xs={12} sm={6} md={4}><TextField label="Senha" type="password" fullWidth required variant="outlined" onChange={(event) => handleChange(data, setData, event.target.value, "password")} value={data.password.value} /></Grid></Grid>
            </Grid>


            <Grid item xs={12} sm={6} md={2}>
                <Button onClick={verifyLogin} fullWidth variant="contained" color="primary" sx={{ padding: "10px 16px", borderRadius: "10px", fontWeight: "bold" }}>
                    Entrar
                </Button>
            </Grid>


            <Grid item xs={12}>
                <Typography variant="body2" align="center" color="primary" sx={{ cursor: "pointer" }}>
                    Esqueci minha senha
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="body2" align="center">
                    Não tem uma conta?{" "}
                    <Typography component={Link} to="/signup" color="primary" sx={{ cursor: "pointer", fontWeight: "bold", textDecoration: "none" }}>
                        Registre
                    </Typography>
                </Typography>
            </Grid>
        </Grid>

    );
};

export default Signin;
