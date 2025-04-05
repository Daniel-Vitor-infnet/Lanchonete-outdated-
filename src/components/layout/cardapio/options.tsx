import { Card, CardContent, Typography, Grid2, Radio } from "@/libs/mui";
import { estoqueItemCardapio } from "@/utils/function";
import stylesPerso from "@/styles/cardapio/options.module.scss";
import { useEffect, useState } from "react";
import cardapioDataJson from "@/utils/CardapioTemp.json";
import CloseIcon from '@mui/icons-material/Close';

interface OptionsProps {
  tipo: 'version' | 'grupo';
  versoes?: any[];
  grupos?: any[];
  onSelect: (item: any) => void;
  grupoAtual?: number;
  respostas?: any[];
  setRespostas?: (respostas: any[]) => void;
}

interface OpcaoMontada {
  itemID: string;
  itemPai?: any;
  versoes: any[];
}

const montarOpcoesGrupo = (grupos: any[], grupoAtual: number): OpcaoMontada[] => {
  const grupo = grupos?.[grupoAtual];
  if (!grupo) return [];

  const rootID = Object.keys(grupo)[0];
  const itens = grupo[rootID];
  const resultado: OpcaoMontada[] = [];

  for (const item of itens) {
    const itemID = Object.keys(item)[0];
    const versoesIDs = item[itemID];

    for (const categoria of cardapioDataJson) {
      const encontrado = categoria.items.find((i: any) => String(i.id) === itemID);
      if (encontrado) {
        // Se for complemento, entrega o item sem versões
        resultado.push({ itemID, itemPai: encontrado, versoes: [{ ...encontrado }] });
        break;
      }
    }
  }
  return resultado;
};

const montarOpcoesVersoes = (versoes: any[]): OpcaoMontada[] => {
  return [{ itemID: 'versao', versoes }];
};

const Options: React.FC<OptionsProps> = ({
  tipo,
  versoes,
  grupos,
  onSelect,
  grupoAtual = 0,
  respostas,
  setRespostas,
}) => {
  const isModoGrupo = tipo === 'grupo';
  const [selectedValue, setSelectedValue] = useState<any | null>(null);

  const opcoes: OpcaoMontada[] = isModoGrupo
    ? montarOpcoesGrupo(grupos || [], grupoAtual)
    : montarOpcoesVersoes(versoes || []);

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
        versoes
          .filter((item: any) => item.sale !== 0)
          .map((item: any) => {
            const tituloCompleto = itemPai
              ? `${itemPai.title}${item.title !== itemPai.title ? ' ' + item.title : ''}`
              : item.title;

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