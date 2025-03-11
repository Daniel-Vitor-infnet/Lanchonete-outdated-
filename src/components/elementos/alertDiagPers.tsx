import * as React from 'react';
import { Grid2, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@/libs/mui';
import { ButtonPerson, mixins } from '@/components';
import { styled } from '@mui/material/styles';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface AlertDiagPersProps {
  message: string;
}

const tituloIconStely = {
  display: 'flex',
  alignItems: 'center',
}

const iconStyle = {
  marginLeft: '20px',
  color: 'orange',
  fontSize: 30
}

const buttonStyles = ({
  background: 'blue',
  height: '35px',
  width: '160px',
  fontSize: "16px",
  "&:hover": {
    background: "linear-gradient(135deg, oklch(0.59 0.22 261.41), oklch(0.59 0.22 261.37))", // Gradiente mais escuro no hover
    boxShadow: "unset",
    transform: "unset", // Levanta levemente o botão
  },
  "&:active": {},

  "&::before": {},
  "&:hover::before": {},

  [mixins.laptop]: {
    fontSize: "14px",
    height: '43px',
    width: '140px',
  },
});

const AlertDiagPers: React.FC<AlertDiagPersProps> = ({ message }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        disableScrollLock={true}
      >
        <Grid2 sx={tituloIconStely}>
          <ReportProblemIcon sx={iconStyle} />
          <DialogTitle sx={{ marginLeft: '-10px', fontWeight: 'bold' }} id="customized-dialog-title">
            Demonstração de conceito
          </DialogTitle>
        </Grid2>
        <DialogContent dividers>
          <Typography sx={{ fontWeight: 'bold' }} gutterBottom>
            Este site é um protótipo, algumas funções podem não estar operacionais:
          </Typography>
          <Typography sx={{ marginTop: "30px" }} gutterBottom>
            {message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <ButtonPerson text="Ok, entendido !" customStyles={buttonStyles} onClick={handleClose} />
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default AlertDiagPers;