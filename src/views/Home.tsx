import React from 'react';
import { Container,  Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Grid, Box } from '../components';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HeaderPers from '../components/elementos/header';
import SlidePers from '../components/elementos/home/slide';
import { Margin } from '@mui/icons-material';




const Home: React.FC = () => {


  const containerStyles = {
    width: '70vw',
    minHeight: '100vh',
    border: '1px solid black',
    marginTop: '4vh',
    backgroundColor: 'mediumspringgreen',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    mx: 'auto', 
    borderRadius: 2,
    boxShadow: 2,
    p: 2
  };

  return (
    <>
      <HeaderPers />

      <Box >
        <p>Teste</p>
      </Box>

      {/* <SlidePers /> */}
    </>
  );
};

export default Home;
