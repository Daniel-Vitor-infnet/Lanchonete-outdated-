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
import SimpleCard from '../components/elementos/home/cards.tsx';




const Home: React.FC = () => {


  const gridStylesCarrocel = {
    height: '25vh',
    backgroundColor: 'mediumspringgreen',
    mx: 'auto', // Centraliza horizontalmente
    overflow: 'hidden',
  };

  const gridAvatarStilos = {
    width: '160px',
    height: '160px',
    position: 'relative',
    zIndex: '1',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: '4px solid skyblue',
  }

  const avatarStilos = {
    width: '100%',
    height: '100%',
    outline: '4px solid darkorchid',
  }

  const pStilos: React.CSSProperties = {
    position: 'absolute',
    fontSize: '0.8rem',
    padding: '1.8px',
    borderRadius: '6px',
    zIndex: 2,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 380%)',
    color: 'white',
    backgroundColor: 'red',
  };


  const gridStylesCards = {
    backgroundColor: 'blue',
  };
  


  return (
    <>
      <HeaderPers />

      <BoxLayout>
        <Grid sx={gridStylesCarrocel}>
          <ImageCarousel images={[slide, slide2]} />
        </Grid>
        <Grid sx={gridAvatarStilos}>
          <Avatar sx={avatarStilos} alt="Logo" src={logo1} />
          <p style={pStilos}>FECHADO</p>
        </Grid>
        <Grid sx={gridStylesCards}>
          <SimpleCard />
        </Grid>

      </BoxLayout>
    </>
  );
};

export default Home;
