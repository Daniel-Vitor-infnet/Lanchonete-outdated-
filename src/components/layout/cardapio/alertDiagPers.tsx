import * as React from 'react';
import { Grid2, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@/libs/mui';
import { ButtonPerson, mixins } from '@/components';
import { styled } from '@mui/material/styles';
import { definirPorTamanhoTela, estoqueItemCardapio } from "@/utils/function";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import stylesPerso from '@/styles/cardapio/AlertDiagPers.module.scss';
import { logPerso } from 'noob-supremo43-libs';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface AlertDiagPersProps {
  open: boolean;
  onClose: () => void;
  title: string;
  imageItem: string;
  description: string;
  price: number;
  stock: boolean;
}

const AlertDiagPers: React.FC<AlertDiagPersProps> = ({ open, onClose, title, imageItem, description, price, stock }) => {

  logPerso({
    tipo: 'error', mensagem: 'Imagem não está vindo 🔥', variavel: estoqueItemCardapio({
      image: imageItem,
      altImg: title,
      stylesPerso: stylesPerso['image'],
      stock: stock,
    })
  });

  return (
    <BootstrapDialog
      open={open}
      onClose={onClose}
      disableScrollLock={true}
      aria-labelledby="customized-dialog-title"
    >
      <Grid2 className={stylesPerso['main-container']}>

        <Grid2 className={stylesPerso['titulo-icon']}>
          <ReportProblemIcon className={stylesPerso['icon']} />
          <Grid2 className={stylesPerso['title-container']}>
            <Typography className={stylesPerso['title']}>
              {title}
            </Typography>
            <Typography className={stylesPerso['title2']}>
              (Item esgotado)
            </Typography>
          </Grid2>
        </Grid2>
        <DialogContent dividers>
          <Grid2 className={stylesPerso['content-wrapper']}>
            <Grid2 className={stylesPerso['image-container']}>
              {estoqueItemCardapio({
                image: imageItem,
                altImg: title,
                stylesPerso: stylesPerso['image'],
                stock: stock,
              })}
            </Grid2>

            <Typography className={stylesPerso['description']} gutterBottom>
              <span>Descrição: </span>{description}
            </Typography>
            <Typography className={stylesPerso['price']}>
              R${price.toFixed(2).toString().replace(".", ",")}
            </Typography>
          </Grid2>
        </DialogContent>
        <DialogActions>
          <ButtonPerson
            text="Ok, entendido !"
            className={stylesPerso['button']}
            onClick={onClose}
          />
        </DialogActions>
      </Grid2>
    </BootstrapDialog>
  );
};

export default AlertDiagPers;
