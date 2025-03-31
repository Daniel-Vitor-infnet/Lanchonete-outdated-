// ✅ QuantidadeContador.tsx atualizado com ID fixo e estilos organizados conforme Options
import { Typography, Grid2 } from "@/libs/mui";
import { useEffect, useState } from "react";
import stylesPerso from "@/styles/cardapio/QuantidadeContador.module.scss";
import cardsCardapioDataJson from "@/utils/cardsCardapioTemp.json";
import { statusItensCardapio } from "@/utils/function";

interface QuantidadeContadorProps {
  ingredients: number[];
  respostas: { [id: string]: number };
  setRespostas: (respostas: { [id: string]: number }) => void;
}

const QuantidadeContador: React.FC<QuantidadeContadorProps> = ({
  ingredients,
  respostas,
  setRespostas
}) => {
  const ingredientsID = 391966; // ID fixo da categoria de ingredientes
  const [listaIngredientes, setListaIngredientes] = useState<any[]>([]);

  useEffect(() => {
    const categoria = cardsCardapioDataJson.find((cat: any) => cat.id === ingredientsID);
    if (categoria) {
      const filtrados = categoria.items.filter((item: any) => ingredients.includes(item.id));
      setListaIngredientes(filtrados);
    }
  }, [ingredients]);

  const handleChange = (id: number, novoValor: number) => {
    const atualizado = { ...respostas, [id]: novoValor };
    setRespostas(atualizado);
  };

  return (
    <>
      {listaIngredientes.map((item) => {
        const quantidade = respostas[item.id] || 0;

        return (
          <Grid2 className={stylesPerso['main-container']} key={item.id}>
            <Grid2 className={stylesPerso['img-complemento-container']}>
            {statusItensCardapio({
                  image: item.image,
                  altImg: item.title,
                  stylesPerso: stylesPerso['menu-img'],
                  status: item.status
                })}
            </Grid2>
            <Grid2 className={stylesPerso['item']}>
              <Typography className={stylesPerso['item-title']}>
                {item.title}
              </Typography>
              <Typography className={stylesPerso['item-title']}>
                R$ {String(item.price.toFixed(2)).replace('.', ',')}
              </Typography>
            </Grid2>
            <Grid2 className={stylesPerso['select-container']}>
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
            </Grid2>
          </Grid2>
        );
      })}
    </>
  );
};

export default QuantidadeContador;
