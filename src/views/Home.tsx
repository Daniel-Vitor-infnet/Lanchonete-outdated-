import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Grid, Box, Avatar } from '../components';
import HeaderPers from '../components/elementos/header';
import ImageCarousel from '../components/elementos/home/slide.tsx';
import BoxLayout from '../components/layout/BoxLayout.tsx';
import slide from '../assets/img/logo.png';
import logo1 from '../assets/img/logo1.png';
import slide2 from '../assets/img/teste.png';
import slide3 from '../assets/img/teste3.jpg';
import { Padding } from '@mui/icons-material';




const Home: React.FC = () => {


  const gridStyles = {
    height: '25vh',
    backgroundColor: 'mediumspringgreen',
    mx: 'auto', // Centraliza horizontalmente
    overflow: 'hidden',
    position: 'relative',
  };

  const avatarStilos = {
    width: '160px',
    height: '160px',
    position: 'absolute',
    zIndex: '1',
    top: '30%',
    left: '44%',
    outline: '4px solid darkorchid',
  }


  return (
    <>
      <HeaderPers />

      <BoxLayout>
        <Grid sx={gridStyles}>
          <ImageCarousel images={[slide, slide2]} />
        </Grid>
        <Avatar sx={avatarStilos} alt="Logo" src={logo1} />
      </BoxLayout>
    </>
  );
};

export default Home;
