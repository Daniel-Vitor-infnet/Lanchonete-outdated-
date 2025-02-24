import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Grid, Box } from '../components';
import HeaderPers from '../components/elementos/header';
import ImageCarousel from '../components/elementos/home/slide.tsx';
import BoxLayout from '../components/styles/BoxLayout';




const Home: React.FC = () => {


  // const containerStyles = {
  //   width: '25vw',
  //   height: '15vh',
  //   backgroundColor: 'mediumspringgreen',
  // };


  return (
    <>
      <HeaderPers />

      <Box sx={BoxLayout}>
        {/* <Grid sx={containerStyles}> */}
          <ImageCarousel />
        {/* </Grid> */}
      </Box>

    </>
  );
};

export default Home;
