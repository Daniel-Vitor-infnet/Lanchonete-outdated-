import { Grid, Card, CardContent, Typography, Button, Switch, Snackbar } from '@mui/material';
import { useState } from 'react';

const Dashboard: React.FC = () => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleSnackbarToggle = () => {
        setShowSnackbar(!showSnackbar);
    };

    return (
        <Grid container spacing={3} padding={2}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center">Painel de Controle - Bebê</Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" align="center">Comida</Typography>
                        <Typography variant="body2" align="center" gutterBottom>
                            Última refeição: 12:00 PM
                        </Typography>
                        <Button variant="contained" color="primary" fullWidth>
                            Registrar Refeição
                        </Button>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" align="center">Sono</Typography>
                        <Typography variant="body2" align="center" gutterBottom>
                            Último sono: 2h atrás
                        </Typography>
                        <Button variant="contained" color="primary" fullWidth>
                            Registrar Sono
                        </Button>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" align="center">Fralda</Typography>
                        <Typography variant="body2" align="center" gutterBottom>
                            Última troca: 1h atrás
                        </Typography>
                        <Button variant="contained" color="primary" fullWidth>
                            Registrar Troca
                        </Button>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Notificações</Typography>
                        <Switch onChange={handleSnackbarToggle} />
                        <Typography variant="body2">
                            {showSnackbar ? 'Notificações Ativadas' : 'Notificações Desativadas'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Snackbar
                open={showSnackbar}
                message="Notificações ativadas!"
                autoHideDuration={3000}
                onClose={() => setShowSnackbar(false)}
            />
        </Grid>
    );
};

export default Dashboard;
