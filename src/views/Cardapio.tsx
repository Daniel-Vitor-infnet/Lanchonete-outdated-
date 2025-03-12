import * as React from 'react';
import styles from '@/styles/Panel.module.scss';
import { Grid2, Box, Typography, Button, Switch, pink, alpha, styled } from '@/libs/mui';
import { AlertDiagPers, ButtonOnOff, TimeSelectPerso, ButtonPerson, mixins } from '@/components';

const mediaQuery = window.matchMedia("(min-width: 1024px)");


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


const Cardapio: React.FC = () => {
  return (
    <Grid2 className={styles.mainContainer}>
      
    </Grid2>
  );
  3
};

export default Cardapio;
