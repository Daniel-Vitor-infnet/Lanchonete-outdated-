import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@/libs/mui";
import { redimencionarTexto } from "@/utils/function/cardapio";

interface CardsListProps {
  cardsCardapio: any;
  stylesPerso: any;
}

const CardsList: React.FC<CardsListProps> = ({ cardsCardapio, stylesPerso }) => {
  return (
    <Grid2 className={stylesPerso['main-container']}>
      {cardsCardapio.map((item: any) => {
        return (
          <Grid2 key={item.id}>
            <Card className={stylesPerso['item']} key={item.id}>
              <img src={item.image} alt={item.title} className={stylesPerso['item-image']} />
              <CardContent sx={{ p: 0 }} className={stylesPerso['item-info']}>
                <Typography className={stylesPerso['item-title']}>
                  {item.title}
                </Typography>
                <Typography className={stylesPerso['item-description']}>
                  {item.description}
                </Typography>
                {item.price && (
                  <Typography className={stylesPerso['item-price']}>
                    R$ {String(item.price.toFixed(2)).replace(".", ",")}
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
