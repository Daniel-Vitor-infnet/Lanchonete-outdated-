import { useState } from "react";
import { Card, CardContent, Typography, Grid2 } from "@/libs/mui";
import { definirPorTamanhoTela, estoqueItemCardapio, formatarValorR$ } from "@/utils/function";
import AlertDiagPers from "@/components/layout/cardapio/alertDiagPers";
import type { ItemEscolhidoType } from "@/components/layout/cardapio/menuCardapio";
import { logPerso } from 'noob-supremo43-libs';


interface StylesSCSS {
  [className: string]: string;
}

type ItensCardapioType = {
  title: string;
  id: number;
  id2: string;
  description: string;
  price: number;
  image: string;
  stock: boolean;
  sale: boolean;
  ingredients: any[];
  complementos: any[];
  version: any[];
};

interface CardsListProps {
  itensCardapio: ItensCardapioType[];
  stylesPerso: StylesSCSS;
  onClick: (item: ItemEscolhidoType) => void;
}

const CardsList: React.FC<CardsListProps> = ({ itensCardapio, stylesPerso, onClick }) => {

  const [alertOpen, setAlertOpen] = useState(false);
  const [itemEsgotado, setItemEsgotado] = useState<ItensCardapioType | null>(null);

  const handleClick = (item: ItensCardapioType) => {
    if (!item.stock) {
      setItemEsgotado(item);
      setAlertOpen(true);
    } else {
      onClick(item);
    }
  };

  return (
    <>
      <Grid2 className={stylesPerso['main-container']}>
        {itensCardapio
          .filter(item => item.sale !== false)
          .map(item => {
            const titleTamanho =
              item.title.length > definirPorTamanhoTela({ desktop: 18, mobile: 11 })
                ? 'item-title-grande'
                : 'item-title-pequeno';

            return (
              <Grid2 key={item.id}>
                <Card className={stylesPerso['item']} onClick={() => handleClick(item)}>
                  <Grid2 className={stylesPerso['item-image-container']}>
                    {estoqueItemCardapio({
                      image: item.image,
                      altImg: item.title,
                      stylesPerso: stylesPerso['item-image'],
                      stock: item.stock,
                    })}
                  </Grid2>
                  <CardContent sx={{ p: 0 }} className={stylesPerso['item-info']}>
                    <Typography className={stylesPerso[titleTamanho]}>
                      {item.title}
                    </Typography>
                    <Typography className={stylesPerso['item-description']}>
                      {item.description}
                    </Typography>
                    <Typography className={stylesPerso['item-price']}>
                      {formatarValorR$(item.price)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            );
          })}
      </Grid2>

      {itemEsgotado && (
        <AlertDiagPers
          open={alertOpen}
          onClose={() => setAlertOpen(false)}
          title={itemEsgotado.title}
          description={itemEsgotado.description}
          imageItem={itemEsgotado.image}
          price={itemEsgotado.price}
          stock={itemEsgotado.stock}
        />
      )}
    </>
  );
};

export default CardsList;
