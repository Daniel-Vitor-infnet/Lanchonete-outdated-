import * as React from 'react';
import { Grid2, Box, Typography, Button } from '@/libs/mui';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { AlertDiagPers, ButtonOnOff, TimeSelectPerso } from '@/components';
import { jaJP } from '@mui/x-date-pickers/locales';


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




  const GridStyke = {
    display: "flex",
    height: "80vh",
    justifyContent: "center",
    alignItems: "center",
  }

  const BoxStyle = {
    backgroundColor: "white",
    minWidth: "40%",
    borderRadius: "10px",
    padding: "60px",
  }

  const TypoTitleStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
  }

  const TypoSubTitleStyles = {
    display: "flex",
    alignItems: "center",
  }

  const GridOptStyke = {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #000000",
    padding: "20px",
  }


  const GridButtonStyles = {
    display: "flex",
    justifyContent: "end",
    marginTop: "40px",
  }

  const ButtonStyles = {
    backgroundColor: "dodgerblue",
    color: "white",
    padding: "7px",
  }


  return (
    <Grid2 style={GridStyke}>
      {/* <AlertDiagPers message='As opções ainda não estão funcionando' /> */}
      <Box style={BoxStyle}>
        <Typography style={TypoTitleStyles}>
          Painel de configurações
        </Typography>
        <Grid2 style={GridOptStyke}>
          <Typography sx={TypoSubTitleStyles}> Estabelecimento </Typography>
          <ButtonOnOff optLeft='Fechar' optRight='Abrir' />
        </Grid2>
        <Grid2 style={GridOptStyke}>
          <Typography sx={TypoSubTitleStyles}> Teste 1 </Typography>
          <PinkSwitch {...label} defaultChecked />
        </Grid2>
        <Grid2 style={GridOptStyke}>
          <Typography sx={TypoSubTitleStyles}> Teste 2 </Typography>
          <PinkSwitch {...label} defaultChecked />
        </Grid2>
        <Grid2 style={GridOptStyke}>
          <Typography sx={TypoSubTitleStyles}> Teste 3 </Typography>
          <TimeSelectPerso />
        </Grid2>
        <Grid2 style={GridOptStyke}>
          <Typography sx={TypoSubTitleStyles}> Teste 4 </Typography>
          <ButtonOnOff />
        </Grid2>
        <Grid2 sx={GridButtonStyles}>
          <Button sx={ButtonStyles}>
            Aplicar
          </Button>
        </Grid2>
      </Box>
    </Grid2>
  );
};

export default Panel;
