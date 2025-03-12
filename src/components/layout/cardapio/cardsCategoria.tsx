import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@/libs/mui";

interface CardItem {
  id: number;
  id2: string;
  title: string;
  description?: string;
  image: string;
  valor: number;
}

interface CardsListProps {
  cardsItens: any;
  stylesPerso: any;
}


const CardsList: React.FC<CardsListProps> = ({ cardsItens, stylesPerso }) => {
  const cardsData: CardItem[] = cardsItens;

  return (
    <Grid2 className={stylesPerso.cardsContainer}>
      {cardsData.map((card: CardItem, index: number) => (
        <Grid2 key={index} >
          <Card className={stylesPerso.card}>
            <img src={card.image} alt={card.title} className={stylesPerso.cardImage} />
            <CardContent className={stylesPerso.cardContent}>
              <Typography className={stylesPerso.cardTitle}>
                {card.title}
              </Typography>
              <Typography className={stylesPerso.cardDescription}>
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CardsList;