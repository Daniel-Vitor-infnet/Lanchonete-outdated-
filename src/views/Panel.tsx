import * as React from 'react';
import styles from '@/styles/Panel.module.scss';
import { Grid2, Box, Typography, Button, Switch, pink, alpha, styled } from '@/libs/mui';
import { AlertDiagPers, ButtonOnOff, TimeSelectPerso, ButtonPerson } from '@/components';
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

const buttonStyles = ({
  background: 'linear-gradient(45deg, #FF1044 30%, #FF8E53 90%)',
  with: '100%',
  height: '100%',
});


const Panel: React.FC = () => {
  return (
    <Grid2 className={styles.mainContainer}>
      {/* <AlertDiagPers message="As opções ainda não estão funcionando" /> */}
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
        <Grid2 className={styles.buttonContainer}>
          <Button className={styles.button}>Aplicar</Button>
        </Grid2>
      </Box>
      <Grid2 className={styles.buttonPedidosContainer}>
        <ButtonPerson text='Ver Pediodos' customStyles={buttonStyles}/>
        <ButtonPerson text='Editar Itens' customStyles={buttonStyles}/>
      </Grid2>
    </Grid2>
  );
  3
};

export default Panel;
