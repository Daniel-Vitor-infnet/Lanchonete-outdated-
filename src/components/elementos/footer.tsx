import React from 'react';
import { Box, Typography, IconButton, Grid2 } from '@/libs/mui';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Estilos definidos como constantes
const footerContainerStyle = {
    width: '100%',
    backgroundColor: '#111',
    color: 'white',
    padding: '20px 20px',
    textAlign: 'center' as const,
    borderTop: '8px solid #ffcc00',
};

const companyNameStyle = {
    fontWeight: 'bold',
    letterSpacing: '2px',
    fontSize: '24px',
    textTransform: 'uppercase',
};

const contactContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '8px',
};

const iconTextStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '18px',
};

const emailIconStyle = { color: '#ffcc00' };
const phoneIconStyle = { color: '#4caf50' };
const locationIconStyle = { color: '#ff5722' };

const socialMediaContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '24px',
};

const copyrightTextStyle = {
    marginTop: '20px',
    opacity: 0.8,
    fontSize: '14px',
};

const Footer: React.FC = () => {
    return (
        <Box sx={footerContainerStyle}>
            {/* Nome da empresa */}
            <Typography variant="h6" gutterBottom sx={companyNameStyle}>
                Lanchonete
            </Typography>

            {/* Contatos e informações */}
            <Grid2 container spacing={2} justifyContent="center">
                <Grid2 sx={contactContainerStyle}>
                    <Typography sx={iconTextStyle}>
                        <PhoneIcon sx={phoneIconStyle} /> +55 11 99999-9999
                        <LocationOnIcon sx={locationIconStyle} /> Rua Exemplo, 123 - Cidade
                        <EmailIcon sx={emailIconStyle} /> exemplo@gmail.com
                        </Typography>
                </Grid2>
            </Grid2>

            {/* Redes Sociais */}
            <Box sx={socialMediaContainerStyle}>
                <IconButton sx={{ color: '#1877F2' }} href="https://facebook.com" target="_blank">
                    <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton sx={{ color: '#E4405F' }} href="https://instagram.com" target="_blank">
                    <InstagramIcon fontSize="large" />
                </IconButton>
                <IconButton sx={{ color: '#25D366' }} href="https://wa.me/5511999999999" target="_blank">
                    <WhatsAppIcon fontSize="large" />
                </IconButton>
            </Box>

            {/* Direitos autorais */}
            <Typography variant="body2" sx={copyrightTextStyle}>
                © 2025 Lanchonete. Todos os direitos reservados.
            </Typography>
        </Box>
    );
};

export default Footer;