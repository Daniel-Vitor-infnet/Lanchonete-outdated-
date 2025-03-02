import React from 'react';
import { Grid2, Paper } from '@/libs/mui';

import imgLogo from '@/assets/img/logo.png';



const HeaderPers: React.FC = () => {
  const containerStyles = {
    width: '100vw',
    height: '8vh',
    backgroundColor: 'mediumspringgreen',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden'
  };


  const itemStyles = {
    backgroundColor: '#fff',
    padding: '1.8vh',
    textAlign: 'center' as const,
  };

  return (

    <Grid2 container sx={containerStyles}>
      <img src={imgLogo} alt="Logo" style={{ height: '6vh', marginLeft: '15px' }} />
      <Grid2 display={'flex'} container spacing={2}>
        <Paper sx={itemStyles}>Centro</Paper>
        <Paper sx={itemStyles}>Centro</Paper>
        <Paper sx={itemStyles}>Centro</Paper>
      </Grid2>
      <Grid2 display={'flex'} container spacing={2} marginRight={2}>
        <Paper sx={itemStyles}>Direita</Paper>
        <Paper sx={itemStyles}>Direita</Paper>
        <Paper sx={itemStyles}>Direita</Paper>
      </Grid2>
    </Grid2>
  );
};

export default HeaderPers;
