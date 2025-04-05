import { useState } from "react";
import { Card, CardContent, Typography, Grid2 } from "@/libs/mui";
import { definirPorTamanhoTela, estoqueItemCardapio, formatarValorR$, handleStatusDataBase } from "@/utils/function";
import AlertDiagPers from "@/components/layout/cardapio/alertDiagPers";
import stylesPerso from "@/styles/cardapio/Itens.module.scss";
import { useComidasPorCategoria } from '@/hooks/useComidasPorCategoria'
import { logPerso } from 'noob-supremo43-libs';
import { Comida } from "@/types";



interface CardsListProps {
  itensCardapio: string;
  onClick: (item: Comida) => void;
}

const CardsList: React.FC<CardsListProps> = ({ itensCardapio, onClick }) => {


  const { data: comidas = [], isLoading, error } = useComidasPorCategoria(itensCardapio)

  const tamanhoTelaTitulo = definirPorTamanhoTela({ desktop: 18, mobile: 11 })


  const [alertOpen, setAlertOpen] = useState(false);
  const [itemEsgotado, setItemEsgotado] = useState<any | null>(null);

  const handleClick = (item: any) => {
    if (!item.stock) {
      setItemEsgotado(item);
      setAlertOpen(true);
    } else {
      onClick(item);
    }
  };

  const estado = handleStatusDataBase(isLoading, error, comidas.length === 0);
    if (estado) return estado;
  
  return (
    <>
      <Grid2 className={stylesPerso['main-container']}>
        {comidas
          .filter(item => item.sale !== false)
          .map(item => {
            const titleTamanho =
              item.title.length > tamanhoTelaTitulo
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
