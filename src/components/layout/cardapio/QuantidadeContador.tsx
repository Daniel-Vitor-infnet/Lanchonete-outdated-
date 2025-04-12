import { Typography, Grid2 } from "@/libs/mui";
import { useEffect, useState } from "react";
import stylesPerso from "@/styles/cardapio/QuantidadeContador.module.scss";
import { estoqueItemCardapio, formatarValorR$ } from "@/utils/function";
import CloseIcon from '@mui/icons-material/Close';
import { Ingrediente } from "@/types";

interface QuantidadeContadorProps {
  ingredients: Ingrediente[];
  respostas: { [id: string]: number };
  setRespostas: (respostas: { [id: string]: number }) => void;
}

const QuantidadeContador: React.FC<QuantidadeContadorProps> = ({
  ingredients,
  respostas,
  setRespostas
}) => {

  const handleChange = (id: string, novoValor: number) => {
    const atualizado = { ...respostas, [id]: novoValor };
    setRespostas(atualizado);
  };

  return (
    <>
      {ingredients.map((item) => {
        const quantidade = respostas[item.id] || 0;
        const subtotal = item.price * quantidade;

        return (
          <Grid2 className={stylesPerso['main-container']} key={item.id}>
            <Grid2 className={stylesPerso['img-complemento-container']}>
              {estoqueItemCardapio({
                image: item.image,
                altImg: item.title,
                stylesPerso: stylesPerso['img-complemento'],
                stock: item.stock
              })}
            </Grid2>
            <Grid2 className={stylesPerso['item']}>
              <Typography className={stylesPerso['item-title']}>
                {item.title}
              </Typography>
              <Typography className={stylesPerso['item-title']}>
                {formatarValorR$(item.price)}
              </Typography>
              {quantidade > 0 && (
                <Typography className={stylesPerso['item-subtotal']}>
                  Subtotal: R$ {subtotal.toFixed(2).replace('.', ',')}
                </Typography>
              )}
            </Grid2>
            <Grid2 className={stylesPerso['select-container']}>
              {item.stock ? (
                <div className={stylesPerso['contador']}>
                  <button
                    className={stylesPerso['btn']}
                    onClick={() => handleChange(item.id, Math.max(0, quantidade - 1))}
                  >
                    -
                  </button>
                  <span className={stylesPerso['quantidade']}>{quantidade}</span>
                  <button
                    className={stylesPerso['btn']}
                    onClick={() => handleChange(item.id, quantidade + 1)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <CloseIcon className={stylesPerso['select']} />
              )}
            </Grid2>
          </Grid2>
        );
      })}
    </>
  );
};

export default QuantidadeContador;
