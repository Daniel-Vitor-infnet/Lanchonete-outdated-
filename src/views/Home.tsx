import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Grid, Box } from '../components';
import HeaderPers from '../components/elementos/header';
import ImageCarousel from '../components/elementos/home/slide.tsx';
import BoxLayout from '../components/layout/BoxLayout.tsx';
import slide from '../assets/img/logo.png';
import slide2 from '../assets/img/teste.png';




const Home: React.FC = () => {


  const gridStyles = {
    height: '25vh',
    backgroundColor: 'mediumspringgreen',
    mx: 'auto', // Centraliza horizontalmente
    overflow: 'hidden',
    position: 'relative',
  };


  return (
    <>
      <HeaderPers />

      <BoxLayout>
        <Grid sx={gridStyles}>
          <ImageCarousel images={[slide, slide2]} />
        </Grid>
      </BoxLayout>

    </>
  );
};

export default Home;
