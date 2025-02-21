import { useState } from 'react';
import { Button, Card, Grid, Typography, TextField, Avatar } from "../components";
import user from "../assets/img/User.png";
import { signIn, signUp } from '../services/authentication';
import { useAppContext } from "../Context";
import { handleChange, validateEmail, validatePassword } from '../utils/function';
import { Link, useNavigate, Navigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const { showSnackMessage, showAlertMessage, supabase, translate } = useAppContext();


    const [data, setData] = useState({
        email: {
            value: "", //remover apenas para testes
            error: null,
            helperText: null,
        },
        password: {
            value: "",
            error: null,
            helperText: null,
        },
        confirm_password: {
            value: "",
            error: null,
            helperText: null,
        },
    });



    const verifyRegister = async () => {

        const emailValidation = validateEmail(data.email.value);
        const passwordValidation = validatePassword(data.password.value);
        setData((v) => ({
            ...v,
            email: {
                value: v.email.value,
                error: emailValidation.error,
                helperText: emailValidation.helperText,
            },
            password: {
                value: v.password.value,
                error: passwordValidation.error,
                helperText: passwordValidation.helperText,
            }
        }));


        if (emailValidation.error || passwordValidation.error) {
            return;
        }



        if (data.password.value !== data.confirm_password.value) {
            console.log("teste de senha diferente");
            showAlertMessage("As senhas são diferentes"), "error";
            return;
        }

        let { data: response, error } = await signUp(data.email.value, data.password.value, supabase);

        if (error) {
            if (typeof error.toString === "function" && error.toString().indexOf("AuthApiError: User already registered") !== -1) {
                showSnackMessage("Usuário registrado");
            } else {
                showSnackMessage(error.toString());
            }
        } else {
            showSnackMessage("Usuário criado com sucesso!");
            navigate("/signin");
        }


    };




    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ minHeight: "100vh", backgroundColor: "#F5F5F5", padding: 4 }}>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar sx={{ width: 100, height: 100 }} src={user} />
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h4" align="center">
                    {translate("welcome")}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="body1" align="center" color="textSecondary">
                    Faça o registro para conhecer o site
                </Typography>
            </Grid>

            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} container justifyContent="center"><Grid item xs={12} sm={6} md={4}><TextField label="E-mail" type="email" fullWidth required variant="outlined" onChange={(event) => handleChange(data, setData, event.target.value, "email")} value={data.email.value} error={data.email.error} helperText={data.email.helperText} /></Grid></Grid>
                <Grid item xs={12} container justifyContent="center"><Grid item xs={12} sm={6} md={4}><TextField label="Senha" type="password" fullWidth required variant="outlined" onChange={(event) => handleChange(data, setData, event.target.value, "password")} value={data.password.value} error={data.password.error} helperText={data.password.helperText} /></Grid></Grid>
                <Grid item xs={12} container justifyContent="center"><Grid item xs={12} sm={6} md={4}><TextField label="Confirmar Senha" type="password" fullWidth required variant="outlined" onChange={(event) => handleChange(data, setData, event.target.value, "confirm_password")} value={data.confirm_password.value} /></Grid></Grid>
            </Grid>


            <Grid item xs={12} sm={6} md={2}>
                <Button onClick={verifyRegister} fullWidth variant="contained" color="primary" sx={{ padding: "10px 16px", borderRadius: "10px", fontWeight: "bold" }}>
                    Registrar
                </Button>
            </Grid>




            <Grid item xs={12}>
                <Typography variant="body2" align="center">
                    Já tem uma conta?{" "}
                    <Typography component={Link} to="/signin" color="primary" sx={{ cursor: "pointer", fontWeight: "bold", textDecoration: "none" }}>
                        Faça login
                    </Typography>
                </Typography>
            </Grid>
        </Grid>

    );
};

export default Signup;
