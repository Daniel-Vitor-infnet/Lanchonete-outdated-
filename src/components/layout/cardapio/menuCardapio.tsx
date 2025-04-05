import { Button, Grid2, Typography } from "@/libs/mui";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { estoqueItemCardapio } from "@/utils/function";
import stylesPerso from "@/styles/cardapio/menu.module.scss";
import Options from "@/components/layout/cardapio/options";
import QuantidadeContador from "@/components/layout/cardapio/QuantidadeContador";
import { useEffect, useState } from "react";
import cardapioDataJson from "@/utils/CardapioTemp.json";
import { logPerso } from 'noob-supremo43-libs';


export type ItemEscolhidoType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  stock: boolean;
  sale: boolean;
  ingredients: number[];
  complementos: any[];
  version: any[];
};

interface MenuItensProps {
  itemEscolhido: ItemEscolhidoType;
  onClose: () => void;
}

const MenuItens: React.FC<MenuItensProps> = ({ itemEscolhido, onClose }) => {
  const temVersao = itemEscolhido.version.length > 0;
  const temComplementos = itemEscolhido.complementos.length > 0;
  const temIngredientes = itemEscolhido.ingredients.length > 0;

  const [etapa, setEtapa] = useState<'version' | 'ingredientes' | 'complementos' | 'final'>('version');
  const [etapaComplementoAtual, setEtapaComplementoAtual] = useState(0);
  const [order, setOrder] = useState({
    version: null as any,
    ingredientes: {} as { [id: string]: number },
    complementos: [] as any[],
  });

  useEffect(() => {
    if (!temVersao) {
      if (temIngredientes) setEtapa('ingredientes');
      else if (temComplementos) setEtapa('complementos');
      else setEtapa('final');
    }
  }, []);

  const proximaEtapa = () => {
    if (etapa === 'version') return temIngredientes ? 'ingredientes' : temComplementos ? 'complementos' : 'final';
    if (etapa === 'ingredientes') return temComplementos ? 'complementos' : 'final';
    return 'final';
  };

  const etapaAnterior = () => {
    if (etapa === 'complementos' && etapaComplementoAtual > 0) {
      setEtapaComplementoAtual(prev => prev - 1);
    } else if (etapa === 'complementos') {
      setEtapa(temIngredientes ? 'ingredientes' : temVersao ? 'version' : 'final');
    } else if (etapa === 'ingredientes') {
      setEtapa(temVersao ? 'version' : 'final');
    } else if (etapa === 'final') {
      setEtapa(temComplementos ? 'complementos' : temIngredientes ? 'ingredientes' : 'version');
    }
  };

  const handleVersionSelect = (selectedVersion: any) => {
    setOrder((prev) => ({ ...prev, version: selectedVersion }));
  };

  const handleIngredientesUpdate = (ingredientes: { [id: string]: number }) => {
    setOrder((prev) => ({ ...prev, ingredientes }));
  };

  const handleComplementosUpdate = (respostas: any[]) => {
    setOrder((prev) => ({ ...prev, complementos: respostas }));
  };

  const handleComplementosFinish = (respostas: any[]) => {
    handleComplementosUpdate(respostas);
    setEtapa('final');
  };

  const handleNext = () => {
    if (etapa === 'complementos') {
      const totalEtapas = itemEscolhido.complementos.length;
      if (etapaComplementoAtual < totalEtapas - 1) {
        setEtapaComplementoAtual(prev => prev + 1);
      } else {
        handleComplementosFinish(order.complementos);
      }
    } else {
      setEtapa(proximaEtapa());
    }
  };

  const finalizeOrder = () => {
      logPerso({ tipo: 'alerta', mensagem: 'Pedido 🔥', variavel:order });
    onClose();
  };

  const basePrice = itemEscolhido.version.length === 0 ? itemEscolhido.price : order.version?.price;

  const ingredientesPrice = Object.entries(order.ingredientes).reduce((acc, [id, quantidade]) => {
    const ingrediente = cardapioDataJson
      .find(cat => cat.id === 391966)
      ?.items.find(item => item.id === Number(id));
    return acc + (ingrediente?.price || 0) * quantidade;
  }, 0);

  const complementosPrice = order.complementos.reduce((acc: number, comp: any) => acc + (comp.price || 0), 0);
  const totalPrice = basePrice + complementosPrice + ingredientesPrice;

  const isNextDisabled =
    (etapa === 'version' && !order.version) ||
    (etapa === 'complementos' && order.complementos[etapaComplementoAtual] == null);

  return (
    <Grid2>
      <div className={stylesPerso['overlay-container']}>
        <div className={stylesPerso['blur-background']} />
        <Grid2 className={stylesPerso['main-container']}>

            <Grid2 className={stylesPerso['menu-header']}>
              <Typography className={stylesPerso['title']} variant="h5">
                {itemEscolhido.title}
              </Typography>

              <Grid2 className={stylesPerso['close-button-container']}>
                <IconButton aria-label="Fechar" onClick={onClose} className={stylesPerso['close-button']}>
                  <CloseIcon />
                </IconButton>
              </Grid2>
            </Grid2>

            <Grid2 className={stylesPerso['menu-container-img']}>
              {estoqueItemCardapio({
                image: itemEscolhido.image,
                altImg: itemEscolhido.title,
                stylesPerso: stylesPerso['menu-img'],
                stock: itemEscolhido.stock,
              })}
            </Grid2>

            <Typography className={stylesPerso['menu-description']}>
              <span>Descrição:</span> {itemEscolhido.description}
            </Typography>

            <Grid2 className={stylesPerso['menu-complementos']}>
              <Grid2 className={stylesPerso['menu-complementos-item']}>
                {etapa === 'version' && (
                  <Options
                    tipo="version"
                    versoes={itemEscolhido.version}
                    onSelect={handleVersionSelect}
                  />
                )}

                {etapa === 'ingredientes' && (
                  <QuantidadeContador
                    ingredients={itemEscolhido.ingredients}
                    respostas={order.ingredientes}
                    setRespostas={handleIngredientesUpdate}
                  />
                )}

                {etapa === 'complementos' && (
                  <Options
                    tipo="grupo"
                    grupos={itemEscolhido.complementos}
                    grupoAtual={etapaComplementoAtual}
                    respostas={order.complementos}
                    setRespostas={handleComplementosUpdate}
                    onSelect={() => {}}
                  />
                )}

                {etapa === 'final' && (
                  <>
                    <Typography>
                      Pedido Completo
                    </Typography>
                    <Typography>
                      Item: {itemEscolhido.title} {itemEscolhido.price && `+ R$ ${String(itemEscolhido.price.toFixed(2)).replace(".", ",")}`}
                    </Typography>
                    <Typography>
                      Versão: {order.version?.title || 'N/A'} {order.version?.price && `+ R$ ${String(order.version.price.toFixed(2)).replace(".", ",")}`}
                    </Typography>
                    <Typography>
                      Complementos: {order.complementos.length > 0
                        ? order.complementos.map((comp: any) => (
                          `${comp.title} ${comp.price ? `+ R$ ${String(comp.price.toFixed(2)).replace(".", ",")}` : ''}`
                        )).join(", ")
                        : "Nenhum"}
                    </Typography>
                  </>
                )}
              </Grid2>
            </Grid2>

            <Grid2 className={stylesPerso['price-container']}>
              <Typography className={stylesPerso['price']}>
                Total: R$ {totalPrice.toFixed(2).replace(".", ",")}
              </Typography>

              <Grid2>
                {etapa !== 'version' && (
                  <Button onClick={etapaAnterior} style={{ color: 'purple' }}>
                    Voltar
                  </Button>
                )}
                {etapa !== 'final' ? (
                  <Button onClick={handleNext} style={{ color: 'purple' }} disabled={isNextDisabled}>
                    Próximo
                  </Button>
                ) : (
                  <Button onClick={finalizeOrder} style={{ color: 'purple' }}>
                    Finalizar Pedido
                  </Button>
                )}
              </Grid2>
            </Grid2>
        </Grid2>
      </div>
    </Grid2>
  );
};

export default MenuItens;