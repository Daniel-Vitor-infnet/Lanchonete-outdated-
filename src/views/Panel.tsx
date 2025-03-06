import * as React from 'react';
import { Grid2, Box, Typography, Button } from '@/libs/mui';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { AlertDiagPers, ButtonOnOff, TimeSelectPerso } from '@/components';
import styles from '@/styles/Panel.module.scss'; // Importando CSS Module

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

const Panel: React.FC = () => {
  return (
    <Grid2 className={styles.mainContainer}>
      {/* <AlertDiagPers message="As opções ainda não estão funcionando" /> */}
      <Box className={styles.box}>
        <Typography className={styles.title}>
          Painel de configurações
        </Typography>
        <Grid2 className={styles.optionContainer}>
          <Typography className={styles.subTitle}>Estabelecimento</Typography>
          <ButtonOnOff optLeft="Fechado" optRight="Aberto" />
        </Grid2>
        <Grid2 className={styles.optionContainer}>
          <Typography className={styles.subTitle}>Teste 1</Typography>
          <PinkSwitch {...label} defaultChecked />
        </Grid2>
        <Grid2 className={styles.optionContainer}>
          <Typography className={styles.subTitle}>Teste 2</Typography>
          <PinkSwitch {...label} defaultChecked />
        </Grid2>
        <Grid2 className={styles.optionContainer}>
          <Typography className={styles.subTitle}>Tempo De Espera</Typography>
          <TimeSelectPerso />
        </Grid2>
        <Grid2 className={styles.optionContainer}>
          <Typography className={styles.subTitle}>Teste 4</Typography>
          <ButtonOnOff />
        </Grid2>
        <Grid2 className={styles.buttonContainer}>
          <Button className={styles.button}>Aplicar</Button>
        </Grid2>
      </Box>
      <Grid2 className={styles.buttonPedidosContainer}>
        <Button className={styles.buttonPedidos}>Ver Pedidos</Button>
      </Grid2>
    </Grid2>
  );
  3
};

export default Panel;
