import * as React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@/libs/mui';
import { styled } from '@mui/material/styles';

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

const AlertDiagPers: React.FC<AlertDiagPersProps> = ({ message }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);8
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Demonstração de conceito
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Este site é um protótipo, algumas funções podem não estar operacionais:
          </Typography>
          <Typography gutterBottom>
           {message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok, entendido !
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default AlertDiagPers;