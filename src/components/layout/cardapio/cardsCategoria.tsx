import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@/libs/mui";



interface CardsListProps {
  cardsItens: any;
  stylesPerso: any;
}


const CardsList: React.FC<CardsListProps> = ({ cardsItens, stylesPerso}) => {


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