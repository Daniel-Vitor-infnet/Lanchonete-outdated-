import React, { useState, useEffect } from 'react';
import { Grid2, Card, Typography, Select, MenuItem, Button, TextField, Snackbar, Alert } from '@mui/material';
import { useAppContext } from "../Context";
import { useParams, useNavigate } from "react-router-dom";
import { AppBar } from "../components";


const Settings: React.FC = () => {
    const { translate } = useAppContext();
    const navigate = useNavigate();

    const initialBabyName = localStorage.getItem('nome_bebe') || "Bebê";
    const initialBabyWeight = localStorage.getItem('peso_bebe') || "00";


    const [babyWeight, setBabyWeight] = useState('');
    const [babyName, setBabyName] = useState('');
    const [language, setLanguage] = useState<string>(() => localStorage.getItem('language') || 'pt');
    const [selectedLanguage, setSelectedLanguage] = useState<string>(language);
    const [alertMessage, setAlertMessage] = useState('');
    const [openAlert, setOpenAlert] = useState(false);

    const handleWeightClick = () => {
        const message = `Peso do bebê foi alterado de ${initialBabyWeight} kg para ${babyWeight} kg`;
        localStorage.setItem('peso_bebe', babyWeight);
        setAlertMessage(message);
        setOpenAlert(true);
        setBabyWeight('');
    };

    const handleNameClick = () => {
        const message = `Nome do bebê foi alterado de ${initialBabyName} para ${babyName}`;
        localStorage.setItem('nome_bebe', babyName);
        setAlertMessage(message);
        setOpenAlert(true);
        setBabyName('');
    };

    const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedLanguage(event.target.value as string);
    };

    const applyLanguageChange = () => {
        setLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
        const message = `Idioma foi alterado para ${selectedLanguage.toUpperCase()}`;
        setAlertMessage(message);
        setOpenAlert(true);
        // navigate('/'); Atualizar o idioma da página movendo para a home
    };

    const handleLogout = () => {
        // Apagar o localStorage
        localStorage.clear();
        navigate('/signin');
        console.log('LocalStorage apagado!');
    };

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };

    useEffect(() => {
        console.log(`Idioma aplicado: ${language}`);
    }, [language]);

    return (
        <Grid2 container spacing={3} sx={{ padding: 4 }}>
            <AppBar title={translate("settings")} />
            <Grid2 size={12}>
                <Typography variant="h4" gutterBottom>
                    {translate('settings')}
                </Typography>
            </Grid2>
    
            <Grid2 size={12} sm={6} md={4}>
                <Card sx={{ padding: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        {translate('select_language')}
                    </Typography>
                    <Select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    >
                        <MenuItem value="pt">Português (Brasil)</MenuItem>
                        <MenuItem value="en">Inglês</MenuItem>
                        <MenuItem value="es">Espanhol</MenuItem>
                        <MenuItem value="it">Italiano</MenuItem>
                    </Select>
                    <Typography variant="body2" color="textSecondary">
                        {translate('current_language')}: {language.toUpperCase()}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: 2 }}
                        onClick={applyLanguageChange}
                        disabled={selectedLanguage === language}
                    >
                        {translate('apply')}
                    </Button>
                </Card>
            </Grid2>
    
            <Grid2 size={12}>
                <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
                    Dados do Bebê
                </Typography>
            </Grid2>
    
            <Grid2 size={12} sm={6} md={4}>
                <Card sx={{ padding: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        {translate('name_baby')}
                    </Typography>
                    <TextField
                        label={`${translate('name_baby')}`}
                        variant="outlined"
                        value={babyName}
                        onChange={(e) => setBabyName(e.target.value)}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={handleNameClick}
                        disabled={!babyName}
                    >
                        Enviar Nome
                    </Button>
                </Card>
            </Grid2>
    
            <Grid2 size={12} sm={6} md={4}>
                <Card sx={{ padding: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        {translate('weight_baby')}
                    </Typography>
                    <TextField
                        label={`${translate('weight_baby')} (kg)`}
                        variant="outlined"
                        type="number"
                        value={babyWeight}
                        onChange={(e) => setBabyWeight(e.target.value)}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleWeightClick}
                        disabled={!babyWeight}
                    >
                        Enviar Peso
                    </Button>
                </Card>
            </Grid2>
    
            <Snackbar
                open={openAlert}
                autoHideDuration={5000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
            <Button
                variant="contained"
                color="error"
                onClick={handleLogout}
                sx={{
                    position: 'fixed',
                    bottom: '10px',
                    left: '10px',
                }}
            >
                {translate('logout')}
            </Button>
        </Grid2>
    );
    
};

export default Settings;
