import React from "react";
import styles from "@/styles/cardapio/Categoria.module.scss";
import { Card, CardContent, Typography, Grid2 } from "@/libs/mui";
import cardsDataJson from "@/utils/cardsCategoriaTemp.json";

interface CardItem {
  id: number;
  id2: string;
  title: string;
  description: string;
  image: string;
}

const cardsData: CardItem[] = cardsDataJson;

const CardsList: React.FC = () => {
  return (
    <Grid2 className={styles.cardsContainer}>
      {cardsData.map((card: CardItem, index: number) => (
        <Grid2 key={index} >
          <Card className={styles.card}>
            <img src={card.image} alt={card.title} className={styles.cardImage} />
            <CardContent className={styles.cardContent}>
              <Typography  className={styles.cardTitle}>
                {card.title}
              </Typography>
              <Typography className={styles.cardDescription}>
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