import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@/libs/mui";


interface itensData {
  valor?: number;
}


interface CardsListProps {
  cardsItens: any;
  stylesPerso: any;
}
let textExtra = "";

function truncarTexto(texto: string, limite = 52) {
  if (texto.length >= limite) {
    textExtra = " ...mais";
    return texto.slice(0, limite);
  } else {
    textExtra = "";
    return texto;
  }
}



const CardsList: React.FC<CardsListProps & itensData> = ({ cardsItens, stylesPerso }) => {


  return (
    <Grid2 className={stylesPerso.cardsContainer}>
      {cardsItens.map((card: any, index: number) => (
        <Grid2 key={index} >
          <Card className={stylesPerso.card}>
            <img src={card.image} alt={card.title} className={stylesPerso.cardImage} />
            <CardContent className={stylesPerso.cardContent}>
              <Typography className={stylesPerso.cardTitle}>
                {card.title}
              </Typography>
              <Typography className={stylesPerso.cardDescription}>
                {truncarTexto(card.description)} <span>{textExtra}</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CardsList;