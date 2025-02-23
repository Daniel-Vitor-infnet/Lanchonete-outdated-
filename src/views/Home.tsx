import React from 'react';
import { Container,  Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Grid, Box } from '../components';
import HeaderPers from '../components/elementos/header';
import SlidePers from '../components/elementos/home/slide';
import BoxLayout from '../components/styles/BoxLayout';




const Home: React.FC = () => {



  return (
    <>
      <HeaderPers />

      <Box sx={BoxLayout}>
        <Grid>
           <p>Teste</p>
        </Grid>
      </Box>

      {/* <SlidePers /> */}
    </>
  );
};

export default Home;
