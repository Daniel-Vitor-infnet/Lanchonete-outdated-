import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@/libs/mui";
import { redimencionarTexto } from "@/utils/function/cardapio";


interface CardsListProps {
  cardsCardapio: any;
  stylesPerso: any;
}

const CardsList: React.FC<CardsListProps> = ({ cardsCardapio, stylesPerso }) => {
  return (
    <Grid2 className={stylesPerso.mainContainer}>
      {cardsCardapio.map((item: any) => {
        return (
          <Grid2 key={item.id}>
            <Card className={stylesPerso.item} key={item.id}>
              <img src={item.image} alt={item.title} className={stylesPerso.itemImage} />
              <CardContent sx={{p: 0}} className={stylesPerso.itemInfo} >
                <Typography className={stylesPerso.itemTitle} >
                  {item.title}
                </Typography>
                <Typography className={stylesPerso.itemDescription}>
                  {item.description}
                </Typography>
                {item.price && (
                  <Typography className={stylesPerso.itemPrice}>
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
