import { Button, Grid2, Typography } from "@/libs/mui";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { estoqueItemCardapio, formatarValorR$, handleStatusDataBase } from "@/utils/function";
import stylesPerso from "@/styles/cardapio/menu.module.scss";
import Options from "@/components/layout/cardapio/options";
import QuantidadeContador from "@/components/layout/cardapio/QuantidadeContador";
import { useEffect, useState } from "react";
import { logPerso } from 'noob-supremo43-libs';
import { useComplementosPorComida, useIngredientesPorComida, useVersionPorComidas } from '@/hooks';
import { Comida, Versao, Ingrediente, Complemento } from "@/types";

interface MenuItensProps {
  itemEscolhido: Comida;
  onClose: () => void;
}

const MenuItens: React.FC<MenuItensProps> = ({ itemEscolhido, onClose }) => {
  const { data: versionData = [], isLoading: isLoading1, error: error1 } = useVersionPorComidas(itemEscolhido.id);
  const { data: ingredientesData = [], isLoading: isLoading2, error: error2 } = useIngredientesPorComida(itemEscolhido.id);
  const { data: complementosData = [], isLoading: isLoading3, error: error3 } = useComplementosPorComida(itemEscolhido.id);

  const temVersao = versionData.length > 0;
  const temIngredientes = ingredientesData.length > 0;
  const temComplementos = complementosData.length > 0;

  const [etapa, setEtapa] = useState<'version' | 'ingredientes' | 'complementos' | 'final'>('version');
  const [etapaComplementoAtual, setEtapaComplementoAtual] = useState(0);
  const [order, setOrder] = useState({
    version: {} as Versao,
    ingredientes: {} as { [id: string]: number },
    complementos: [] as (Complemento & { comida: Comida })[],
  });

  useEffect(() => {
    if (!temVersao) {
      if (temIngredientes) setEtapa('ingredientes');
      else if (temComplementos) setEtapa('complementos');
      else setEtapa('final');
    }
  }, [temVersao, temIngredientes, temComplementos]);

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

  const handleVersionSelect = (selectedVersion: Versao) => {
    setOrder((prev) => ({ ...prev, version: selectedVersion }));
  };

  const handleIngredientesUpdate = (ingredientes: { [id: string]: number }) => {
    setOrder((prev) => ({ ...prev, ingredientes }));
  };

  const handleComplementosUpdate = (respostas: (Complemento & { comida: Comida })[]) => {
    setOrder((prev) => ({ ...prev, complementos: respostas }));
  };

  const handleComplementosFinish = (respostas: (Complemento & { comida: Comida })[]) => {
    handleComplementosUpdate(respostas);
    setEtapa('final');
  };

  const handleNext = () => {
    if (etapa === 'complementos') {
      const totalEtapas = complementosData.length;
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
    onClose();
  };

  const estado = handleStatusDataBase(isLoading1, error1, false)
    || handleStatusDataBase(isLoading2, error2, false)
    || handleStatusDataBase(isLoading3, error3, false);
  if (estado) return estado;

  const basePrice = temVersao ? order.version?.price : itemEscolhido.price;

  const ingredientesPrice = ingredientesData.reduce((acc, item) => {
    const quantidade = order.ingredientes[item.id] || 0;
    return acc + (item.price || 0) * quantidade;
  }, 0);

  const complementosPrice = order.complementos.reduce((acc: number, comp) => acc + (comp.comida?.price || 0), 0);
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
                  versoes={versionData}
                  onSelect={handleVersionSelect}
                />
              )}

              {etapa === 'ingredientes' && (
                <QuantidadeContador
                  ingredients={ingredientesData}
                  respostas={order.ingredientes}
                  setRespostas={handleIngredientesUpdate}
                />
              )}

              {etapa === 'complementos' && (
                <Options
                  grupos={complementosData as (Complemento & { comida: Comida })[]}
                  grupoAtual={etapaComplementoAtual}
                  respostas={order.complementos}
                  setRespostas={handleComplementosUpdate}
                  onSelect={() => { }}
                />
              )}

              {etapa === 'final' && (
                <>
                  <Typography>Pedido Completo</Typography>
                  <Typography>
                    {itemEscolhido.title} {itemEscolhido.price && `+ ${formatarValorR$(itemEscolhido.price)}`}
                  </Typography>

                  {order.version?.title && (
                    <Typography>
                      Versão:  {`${order.version.title} + ${formatarValorR$(order.version.price)}`}
                    </Typography>
                  )}

                  {logPerso({ tipo: 'alerta', mensagem: 'Pedido2 🔥', variavel: order.complementos })}

                  <Typography>
                    Complementos: {order.complementos.length > 0
                      ? order.complementos.map((comp: any) => (
                        `${comp.comida?.title} ${comp.comida?.price ? `+ ${formatarValorR$(comp.comida.price)}` : ''}`
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
