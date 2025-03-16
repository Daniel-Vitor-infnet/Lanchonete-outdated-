import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@/libs/mui";
import { redimencionarTexto } from "@/utils/function/cardapio";


interface CardsListProps {
  cardsItens: any;
  stylesPerso: any;
}

const CardsList: React.FC<CardsListProps> = ({ cardsItens, stylesPerso }) => {
  return (
    <Grid2 className={stylesPerso.cardsContainer}>
      {cardsItens.map((card: any, index: number) => {
        const { texto: titulo, sufixo: sufixoTitulo } = redimencionarTexto(card.title, 15);
        const { texto: descricao, sufixo: sufixoDescricao } = redimencionarTexto(card.description, 50, "pontos+");

        return (
          <Grid2 key={index}>
            <Card className={stylesPerso.card}>
              <img src={card.image} alt={card.title} className={stylesPerso.cardImage} />
              <CardContent className={stylesPerso.cardContent}>
                <Typography className={stylesPerso.cardTitle}>
                  {titulo} <span>{sufixoTitulo}</span>
                </Typography>
                <Typography className={stylesPerso.cardDescription}>
                  {descricao} <span>{sufixoDescricao}</span>
                </Typography>
                {card.price && (
                  <Typography className={stylesPerso.cardPrice}>
                    R$ {String(card.price.toFixed(2)).replace(".", ",")}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default CardsList;
