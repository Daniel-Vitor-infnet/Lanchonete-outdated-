import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

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
    <Container>
      {/* Banner Principal */}
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Bem-vindo à Nossa Loja
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Os melhores produtos para você
        </Typography>
      </Box>

      {/* Lista de Produtos em Destaque */}
      <Grid container spacing={4}>
        {produtos.map((produto) => (
          <Grid item key={produto.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={produto.imagem}
                alt={produto.nome}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {produto.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {produto.descricao}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {produto.preco}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Comprar</Button>
                <Button size="small">Detalhes</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
