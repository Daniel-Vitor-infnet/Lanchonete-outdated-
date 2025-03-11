import * as React from 'react';
import styles from '@/styles/Panel.module.scss';
import { Grid2, Box, Typography, Button, Switch, pink, alpha, styled } from '@/libs/mui';
import { AlertDiagPers, ButtonOnOff, TimeSelectPerso, ButtonPerson, mixins } from '@/components';
import { Status, StatusMobile } from '@/views/subElementos/panel/status';

const mediaQuery = window.matchMedia("(min-width: 1024px)");


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

const buttonPedidosCardsStyles = ({
  background: 'linear-gradient(45deg, #FF1044 30%, #FF8E53 90%)',
  with: '100%',
  height: '100%',
  textTransform: "uppercase",
});

const buttonAplicarStyles = ({
  background: 'blue',
  height: '35px',
  width: '160px',
  "&:hover": {
    background: "linear-gradient(135deg, oklch(0.59 0.22 261.41), oklch(0.59 0.22 261.37))", // Gradiente mais escuro no hover
    boxShadow: "unset",
    transform: "unset", // Levanta levemente o botão
  },
  "&:active": {},

  "&::before": {},
  "&:hover::before": {},
  [mixins.laptop]: {
    height: '43px',
    width: '140px',
  },
});


const Panel: React.FC = () => {
  return (
    <Grid2 className={styles.mainContainer}>
      <AlertDiagPers message="Apenas os botões de 'Ver Pediodos' e 'Editar Itens' estão funcionais" />
      <Box className={styles.box}>
        <Typography className={styles.title}>
          Painel de configurações
        </Typography>
        <Grid2 className={styles.optionContainer}>
          <Typography className={styles.subTitle}>Status</Typography>
          {mediaQuery.matches ? <Status /> : <StatusMobile />}
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
        <Grid2 className={styles.buttonAplicarContainer}>
          <ButtonPerson text='Aplicar' customStyles={buttonAplicarStyles} />
        </Grid2>
      </Box>
      <Grid2 className={styles.buttonPedidosCardsContainer}>
        <ButtonPerson text='Ver Pediodos' customStyles={buttonPedidosCardsStyles} />
        <ButtonPerson text='Editar Itens' customStyles={buttonPedidosCardsStyles} />
      </Grid2>
    </Grid2>
  );
  3
};

export default Panel;
