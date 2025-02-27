import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Grid, Box, Avatar } from '../components';
import HeaderPers from '../components/elementos/header';
import ImageCarousel from '../components/elementos/home/slide.tsx';
import BoxLayout from '../components/layout/BoxLayout.tsx';
import slide from '../assets/img/logo.png';
import slide2 from '../assets/img/teste.png';
import slide3 from '../assets/img/teste3.jpg';




const Home: React.FC = () => {


  const gridStyles = {
    height: '25vh',
    backgroundColor: 'mediumspringgreen',
    mx: 'auto', // Centraliza horizontalmente
    overflow: 'hidden',
    position: 'relative',
  };

  const avatarStilos = {
    width: '8vw',
    height: '15vh',
    position: 'absolute',
    zIndex: '1',
    top: '30%',
    left: '45%',
    outline: '4px solid white',
  }


  return (
    <>
      <HeaderPers />

      <BoxLayout>
        <Grid sx={gridStyles}>
          <ImageCarousel images={[slide, slide2]} />
        </Grid>
        <Avatar sx={avatarStilos} alt="Logo" src={slide3} />
      </BoxLayout>
    </>
  );
};

export default Home;
