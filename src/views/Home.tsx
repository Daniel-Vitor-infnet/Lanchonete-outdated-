import React from 'react';
import { Container, Box, Typography,  Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Grid } from '../components';

// Dados simulados de produtos
const produtos = [
  {
    id: 1,
    nome: 'Produto 1',
    descricao: 'Descrição do Produto 1',
    preco: 'R$ 100,00',
    imagem: 'url-da-imagem-1',
  },
  {
    id: 2,
    nome: 'Produto 2',
    descricao: 'Descrição do Produto 2',
    preco: 'R$ 150,00',
    imagem: 'url-da-imagem-2',
  },
  // Adicione mais produtos conforme necessário
];

const Home: React.FC = () => {
  return (
    <Grid>
      <p>Batata</p>
    </Grid>
  );
};

export default Home;
