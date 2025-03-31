import { useState } from "react";
import { Card, CardContent, Typography, Grid2 } from "@/libs/mui";
import { obterTamanhoTela, estoqueItemCardapio } from "@/utils/function";

interface CardsListProps {
  cardsCardapio: any;
  stylesPerso: any;
  onClick: (valor: string) => void;
}


const CardsList: React.FC<CardsListProps> = ({ cardsCardapio, stylesPerso, onClick }) => {





  return (
    <Grid2 className={stylesPerso['main-container']}>
      {cardsCardapio.map((item: any) => {
        const titleTamanho = item.title.length > obterTamanhoTela(18, null, null, 11) ? 'item-title-grande' : 'item-title-pequeno';
        return (
          <Grid2 key={item.id}>
            <Card className={stylesPerso['item']} key={item.id} onClick={() => onClick(item)}>
              <Grid2 className={stylesPerso['item-image-container']}>
                {estoqueItemCardapio({ image: item.image, altImg: item.title, stylesPerso: stylesPerso['item-image'], stock: item.stock })}
              </Grid2>
              <CardContent sx={{ p: 0 }} className={stylesPerso['item-info']}>
                <Typography className={stylesPerso[titleTamanho]}>
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
