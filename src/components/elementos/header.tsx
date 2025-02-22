import React from 'react';
import { Grid, Avatar } from '../index';
import Paper from '@mui/material/Paper';

import imgLogo from '../../assets/img/logo.png';



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

    <Grid container sx={containerStyles}>
      <img src={imgLogo} alt="Logo" style={{ height: '6vh', marginLeft: '15px' }} />
      <Grid display={'flex'} container spacing={2}>
        <Paper sx={itemStyles}>Centro</Paper>
        <Paper sx={itemStyles}>Centro</Paper>
        <Paper sx={itemStyles}>Centro</Paper>
      </Grid>
      <Grid display={'flex'} container spacing={2} marginRight={2}>
        <Paper sx={itemStyles}>Direita</Paper>
        <Paper sx={itemStyles}>Direita</Paper>
        <Paper sx={itemStyles}>Direita</Paper>
      </Grid>
    </Grid>
  );
};

export default HeaderPers;
