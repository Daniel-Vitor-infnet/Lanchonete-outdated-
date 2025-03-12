import React from "react";
import styles from "@/styles/Cards.module.scss"; 
import { Card, CardContent, Typography } from "@mui/material";
import cardsDataJson from "../../../public/cardsCategoriaTemp.json";

interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const cardsData: CardItem[] = cardsDataJson.cards;

const CardsList: React.FC = () => {
  return (
    <div className={styles.cardsContainer}>
      {cardsData.map((card: CardItem, index: number) => (
        <Card key={index} className={styles.card}>
          <div className={styles.cardHeader}>
            <img src={card.image} alt={card.title} className={styles.cardImage} />
          </div>
          <CardContent className={styles.cardContent}>
            <Typography variant="h6" className={styles.cardTitle}>
              {card.title}
            </Typography>
            <Typography variant="body2" className={styles.cardDescription}>
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardsList;