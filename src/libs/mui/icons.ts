//Imports Geral
import muiAccountCircle from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


//Imports de rede social

const icones: Record<string, Record<string, any>> = {
    geral: {
        AccountCircle: muiAccountCircle,
        Circle: CircleIcon,
        Menu: MenuIcon,
        Email: EmailIcon,
        Phone: PhoneIcon,
        LocationOn: LocationOnIcon,
        Facebook: FacebookIcon,
        Instagram: InstagramIcon,
        WhatsApp: WhatsAppIcon,
    }

};

export default icones;
