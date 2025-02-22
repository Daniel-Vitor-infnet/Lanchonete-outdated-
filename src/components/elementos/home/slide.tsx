import React from 'react';
import { Grid } from '../../index';
import Paper from '@mui/material/Paper';




const SlidePers: React.FC = () => {
  const containerStyles = {
    width: '80vw',
    height: '58vh',
    border: '1px solid black',
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
        <p>Teste</p>
    </Grid>
  );
};

export default SlidePers;
