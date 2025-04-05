import { Card, CardContent, Typography, Grid2, Radio } from "@/libs/mui";
import { estoqueItemCardapio } from "@/utils/function";
import stylesPerso from "@/styles/cardapio/options.module.scss";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import { Comida, Versao, Complemento } from '@/types';

interface OptionsProps {
  versoes?: Versao[];
  grupos?: (Complemento & { comida?: Comida })[];
  onSelect: (item: any) => void;
  grupoAtual?: number;
  respostas?: any[];
  setRespostas?: (respostas: any[]) => void;
}

const Options: React.FC<OptionsProps> = ({
  versoes = [],
  grupos = [],
  onSelect,
  grupoAtual = 0,
  respostas,
  setRespostas,
}) => {
  const isModoGrupo = grupos.length > 1 || (grupos.length === 1 && !!grupos[0].categoria_id);
  const [selectedValue, setSelectedValue] = useState<any | null>(null);

  const opcoes = isModoGrupo
    ? grupos
        .filter((_, idx) => idx === grupoAtual)
        .map((complemento) => {
          const comida = complemento.comida;
          return {
            itemID: complemento.comida_id,
            versoes: [
              {
                id: complemento.comida_id,
                title: comida?.title || '',
                price: comida?.price || 0,
                image: comida?.image || '',
                stock: comida?.stock ?? true,
                sale: comida?.sale ?? true,
              },
            ],
          };
        })
    : [{ itemID: 'versao', versoes }];

  useEffect(() => {
    if (!isModoGrupo && versoes.length > 0 && !selectedValue) {
      const defaultValue = versoes[0];
      setSelectedValue(defaultValue);
      onSelect(defaultValue);
    }
  }, [versoes]);

  useEffect(() => {
    if (isModoGrupo && opcoes.length > 0 && !respostas?.[grupoAtual]) {
      const primeira = opcoes[0].versoes[0];
      if (primeira) {
        const novasRespostas = [...(respostas || [])];
        novasRespostas[grupoAtual] = primeira;
        setSelectedValue(primeira);
        setRespostas?.(novasRespostas);
      }
    }
  }, [opcoes]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, escolhido: any) => {
    setSelectedValue(escolhido);
    if (isModoGrupo && respostas && setRespostas) {
      const novasRespostas = [...respostas];
      novasRespostas[grupoAtual] = escolhido;
      setRespostas(novasRespostas);
    } else {
      onSelect(escolhido);
    }
  };

  const selectedId = isModoGrupo
    ? respostas?.[grupoAtual]?.id
    : selectedValue?.id;

  return (
    <>
      {opcoes.map(({ itemID, versoes }) => (
        versoes
          .filter((item: any) => item.sale !== false)
          .map((item: any) => {
            const tituloCompleto = item.title;

            return (
              <Grid2 className={stylesPerso['main-container']} key={item.id}>
                <Grid2 className={stylesPerso['img-complemento-container']}>
                  {estoqueItemCardapio({
                    image: item.image,
                    altImg: tituloCompleto,
                    stylesPerso: stylesPerso['img-complemento'],
                    stock: item.stock
                  })}
                </Grid2>
                <Grid2 className={stylesPerso['item']}>
                  <Typography className={stylesPerso['item-title']}>
                    {tituloCompleto}
                  </Typography>
                  <Typography className={stylesPerso['item-title']}>
                    R$ {String(item.price?.toFixed(2) || '0.00').replace(".", ",")}
                  </Typography>
                </Grid2>
                <Grid2 className={stylesPerso['select-container']}>
                  {item.stock ? (
                    <Radio
                      className={stylesPerso['select']}
                      checked={selectedId === item.id}
                      onChange={(e) => handleChange(e, item)}
                      value={item.id}
                      name="radio-buttons"
                      slotProps={{
                        input: {
                          'aria-label': tituloCompleto,
                        }
                      }}
                    />
                  ) : (
                    <CloseIcon className={stylesPerso['select']} />
                  )}
                </Grid2>
              </Grid2>
            );
          })
      ))}
    </>
  );
};

export default Options;
