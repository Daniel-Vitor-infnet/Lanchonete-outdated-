// ✅ Options.tsx atualizado para exibir todos os itens com ou sem versões corretamente
import { Card, CardContent, Typography, Grid2, Radio } from "@/libs/mui";
import { statusItensCardapio } from "@/utils/function";
import stylesPerso from "@/styles/cardapio/options.module.scss";
import { useEffect, useState } from "react";
import cardsCardapioDataJson from "@/utils/cardsCardapioTemp.json";

interface OptionsProps {
  tipo: 'version' | 'grupo';
  complementos: any;
  onSelect: (item: any) => void;
  grupoAtual?: number;
  respostas?: any[];
  setRespostas?: (respostas: any[]) => void;
}

const Options: React.FC<OptionsProps> = ({
  tipo,
  complementos,
  onSelect,
  grupoAtual = 0,
  respostas,
  setRespostas,
}) => {
  const isModoGrupo = tipo === 'grupo';
  const [selectedValue, setSelectedValue] = useState<any | null>(null);

  let opcoes: { itemID: string, itemPai?: any, versoes: any[] }[] = [];

  if (isModoGrupo) {
    const grupo = complementos.complementos[grupoAtual];
    if (grupo) {
      const rootID = Object.keys(grupo)[0];
      const itens = grupo[rootID];

      for (const item of itens) {
        const itemID = Object.keys(item)[0];
        const versoesIDs = item[itemID];

        for (const categoria of cardsCardapioDataJson) {
          const encontrado = categoria.items.find((i: any) => String(i.id) === itemID);
          if (encontrado) {
            const versoes = versoesIDs.length > 0
              ? encontrado.version.filter((v: any) => versoesIDs.includes(v.id))
              : [{ ...encontrado }];

            // Se o item tem versões, adiciona cada versão separada com referência ao pai
            if (versoes.length > 0) {
              opcoes.push({ itemID, itemPai: encontrado, versoes });
            }
            break;
          }
        }
      }
    }
  } else {
    opcoes = [{ itemID: 'versao', versoes: complementos.version }];
  }

  useEffect(() => {
    if (!isModoGrupo && opcoes[0]?.versoes?.length > 0 && !selectedValue) {
      const defaultValue = opcoes[0].versoes[0];
      setSelectedValue(defaultValue);
      onSelect(defaultValue);
    }
  }, [opcoes]);

  useEffect(() => {
    if (isModoGrupo && opcoes.length > 0 && !respostas?.[grupoAtual]) {
      const primeira = opcoes[0]?.versoes[0];
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
      {opcoes.map(({ itemID, itemPai, versoes }) => (
        versoes.map((item: any) => {
          const tituloCompleto = itemPai ? `${itemPai.title}${item.title !== itemPai.title ? ' ' + item.title : ''}` : item.title;

          return (
            <Grid2 className={stylesPerso['main-container']} key={item.id}>
              <Grid2 className={stylesPerso['img-complemento-container']}>
                {statusItensCardapio({
                  image: item.image,
                  altImg: tituloCompleto,
                  stylesPerso: stylesPerso['menu-img'],
                  status: item.status
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
              </Grid2>
            </Grid2>
          );
        })
      ))}
    </>
  );
};

export default Options;
