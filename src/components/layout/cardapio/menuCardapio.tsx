import { Grid2, Typography } from "@/libs/mui";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { estoqueItemCardapio, formatarValorR$ } from "@/utils/function";
import stylesPerso from "@/styles/cardapio/menu.module.scss";
import OptionsVersion from "@/components/layout/cardapio/OptionsVersion";
import OptionsComplementosCategory from "@/components/layout/cardapio/OptionsComplementosCategory";
import QuantidadeContador from "@/components/layout/cardapio/QuantidadeContador";
import { useEffect, useState } from "react";
import { useComplementosPorComida, useIngredientesPorComida, useVersionPorComidas } from "@/hooks";
import { Comida, Versao, Ingrediente, ComplementoComVersoes2, Versao2 } from "@/types";
import { logPerso } from 'noob-supremo43-libs';
import { ButtonPerson } from '@/components';
import { useAppContext } from "@/Context";
import tinycolor from "tinycolor2";

interface MenuItensProps {
  itemEscolhido: Comida;
  onClose: () => void;
}

const MenuItens: React.FC<MenuItensProps> = ({ itemEscolhido, onClose }) => {
  const { settings } = useAppContext();
  const { data: versionData = [], isLoading: isLoading1 } = useVersionPorComidas(itemEscolhido.id);
  const { data: ingredientesData = [], isLoading: isLoading2 } = useIngredientesPorComida(itemEscolhido.id);
  const { data: complementosData = [], isLoading: isLoading3 } = useComplementosPorComida(itemEscolhido.id);

  //logPerso({ tipo: "info", mensagem: "Dados de versões:", variavel: versionData });
  //logPerso({ tipo: "info", mensagem: "Dados de ingredientes:", variavel: ingredientesData });
  //logPerso({ tipo: "info", mensagem: "Dados de complementos:", variavel: complementosData });

  const temVersao = versionData.length > 0;
  const temIngredientes = ingredientesData.length > 0;
  const temComplementos = complementosData.length > 0;

  // Define as etapas do fluxo
  type Etapa = "version" | "ingredientes" | "complementos" | "final";
  const [etapa, setEtapa] = useState<Etapa>("version");
  const [etapaComplementoAtual, setEtapaComplementoAtual] = useState(0);

  // Estado do pedido com seleção de versão, ingredientes e complementos
  const [order, setOrder] = useState<{
    version: Versao;
    ingredientes: { [id: string]: number };
    complementos: ({ complemento: ComplementoComVersoes2; version: Versao2 } | null)[];
  }>({
    version: {} as Versao,
    ingredientes: {},
    complementos: [],
  });

  // Reseta o estado apenas quando o itemEscolhido mudar
  useEffect(() => {
    setEtapa("version");
    setEtapaComplementoAtual(0);
    setOrder({
      version: {} as Versao,
      ingredientes: {},
      complementos: temComplementos ? Array.from({ length: complementosData.length }, () => null) : [],
    });
  }, [itemEscolhido]);

  // Define a etapa inicial após o carregamento completo dos dados
  useEffect(() => {
    if (!isLoading1 && !isLoading2 && !isLoading3) {
      if (!temVersao) {
        if (temIngredientes) {
          setEtapa("ingredientes");
        } else if (temComplementos) {
          setEtapa("complementos");
        } else {
          setEtapa("final");
        }
      }
    }
  }, [temVersao, temIngredientes, temComplementos, isLoading1, isLoading2, isLoading3]);

  const proximaEtapa = () => {
    if (etapa === "version") return temIngredientes ? "ingredientes" : temComplementos ? "complementos" : "final";
    if (etapa === "ingredientes") return temComplementos ? "complementos" : "final";
    return "final";
  };

  const etapaAnterior = () => {
    if (etapa === "complementos" && etapaComplementoAtual > 0) {
      setEtapaComplementoAtual((prev) => prev - 1);
    } else if (etapa === "complementos") {
      setEtapa(temIngredientes ? "ingredientes" : temVersao ? "version" : "final");
    } else if (etapa === "ingredientes") {
      setEtapa(temVersao ? "version" : "final");
    } else if (etapa === "final") {
      setEtapa(temComplementos ? "complementos" : temIngredientes ? "ingredientes" : "version");
    }
  };

  // Versão original que você já usa
  const handleVersionSelect = (selectedVersion: Versao) => {
    setOrder((prev) => ({ ...prev, version: selectedVersion }));
  };

  // Novo useEffect logo depois do estado ser definido e os dados carregados
  useEffect(() => {
    if (!order.version?.id && versionData.length > 0) {
      handleVersionSelect(versionData[0]);
    }
  }, [order.version, versionData]);

  const handleIngredientesUpdate = (ingredientes: { [id: string]: number }) => {
    setOrder((prev) => ({ ...prev, ingredientes }));
  };

  const handleComplementosUpdate = (
    selection: { complemento: ComplementoComVersoes2; version: Versao2 },
    categoryIndex: number
  ) => {
    setOrder((prev) => {
      const newComplementos = [...prev.complementos];
      newComplementos[categoryIndex] = selection;
      return { ...prev, complementos: newComplementos };
    });
  };

  const handleComplementosFinish = () => {
    setEtapa("final");
  };

  const handleNext = () => {
    if (etapa === "complementos") {
      if (etapaComplementoAtual < complementosData.length - 1) {
        setEtapaComplementoAtual((prev) => prev + 1);
      } else {
        handleComplementosFinish();
      }
    } else {
      setEtapa(proximaEtapa());
    }
  };

  const finalizeOrder = () => {
    onClose();
  };

  const basePrice = temVersao ? order.version.price : itemEscolhido.price;
  const ingredientesPrice = ingredientesData.reduce((acc, item: Ingrediente) => {
    const quantidade = order.ingredientes[item.id] || 0;
    return acc + item.price * quantidade;
  }, 0);

  //Calculo para complementos
  const complementosPrice = order.complementos.reduce((total, item) => {
    const comp = item?.complemento;

    // Regra 1: version ausente, nulo ou vazio
    if (!comp?.version || comp.version.length === 0) {
      if (comp?.free === true) return total + 0;
      return total + (comp?.price || 0);
    }

    // Regra 2: version com itens
    const valorVersoes = comp.version.reduce((soma, versao) => {
      if (versao.free === true) return soma + 0;
      return soma + (versao.price || 0);
    }, 0);

    return total + valorVersoes;
  }, 0);


  const totalPrice = basePrice + ingredientesPrice + complementosPrice;

  const isNextDisabled =
    (etapa === "version" && !order.version.id) ||
    (etapa === "complementos" &&
      (!order.complementos[etapaComplementoAtual] || !order.complementos[etapaComplementoAtual]?.version));

  const complementosEscolhidos = order.complementos.filter((comp) => comp?.complemento.id !== "no-option");



  return (
    <Grid2>
      <div className={stylesPerso["overlay_Container"]}>
        <div className={stylesPerso["blur_Background"]} />
        <Grid2 className={stylesPerso["main_Container"]} >
          {/* Cabeçalho */}
          <Grid2 className={stylesPerso["menu_Header"]}>
            <Typography className={stylesPerso["menu_Title"]} variant="h5">
              {itemEscolhido.title}
            </Typography>
            <Grid2 className={stylesPerso["close_ButtonWrapper"]}>
              <IconButton aria-label="Fechar" onClick={onClose} className={stylesPerso["close_Button"]}>
                <CloseIcon />
              </IconButton>
            </Grid2>
          </Grid2>

          {/* Imagem */}
          <Grid2 className={stylesPerso["menu_ImageContainer"]}>
            {estoqueItemCardapio({
              image: itemEscolhido.image,
              altImg: itemEscolhido.title,
              stylesPerso: stylesPerso["menu_Image"],
              stock: itemEscolhido.stock,
            })}
          </Grid2>

          {/* Descrição */}
          <Typography className={stylesPerso["menu_Description"]}>
            <span style={{ color: tinycolor(settings?.cor_primaria || "#FF5100").darken(5).toHexString() }}>
              Descrição:
              </span> 
              {itemEscolhido.description}
          </Typography>

          {/* Conteúdo de cada etapa */}
          <Grid2 className={stylesPerso["menu_StepsWrapper"]}>
            <Grid2 className={stylesPerso["menu_StepContent"]}>
              {etapa === "version" && (
                <OptionsVersion
                  versoes={versionData}
                  selected={order.version?.id ? order.version : null}
                  onSelect={handleVersionSelect}
                />
              )}
              {etapa === "ingredientes" && (
                <QuantidadeContador
                  ingredients={ingredientesData}
                  respostas={order.ingredientes}
                  setRespostas={handleIngredientesUpdate}
                />
              )}
              {etapa === "complementos" && (
                <>
                  {complementosData.length > 0 &&
                    (() => {
                      const currentCategoryObj = complementosData[etapaComplementoAtual];
                      const categoryName = Object.keys(currentCategoryObj)[0];
                      const items = currentCategoryObj[categoryName];
                      return (
                        <OptionsComplementosCategory
                          categoryName={categoryName}
                          items={items}
                          onSelect={(selection) => handleComplementosUpdate(selection, etapaComplementoAtual)}
                          selected={order.complementos[etapaComplementoAtual] || null}
                          autoSelectDefault={true}
                        />

                      );
                    })()}
                </>
              )}
              {etapa === "final" && (

                <Grid2 className={stylesPerso["order_Summary"]}>
                  <Typography className={stylesPerso["order_Title"]}>Pedido Completo</Typography>

                  <Typography className={stylesPerso["order_Item"]}>
                    {itemEscolhido.title}{" "}
                    {itemEscolhido.price && `+ ${formatarValorR$(itemEscolhido.price)}`}
                  </Typography>

                  {order.version.title && (
                    <Typography className={stylesPerso["order_Version"]}>
                      Versão: {`${order.version.title} + ${formatarValorR$(order.version.price)}`}
                    </Typography>
                  )}

                  {/* Complementos */}
                  <Typography className={stylesPerso["order_AddonsTitle"]}>
                    Complementos:
                  </Typography>


                  {complementosEscolhidos.length > 0 ? (
                    complementosEscolhidos.map((comp) => {
                      if (comp!.complemento.version.length === 0) {
                        return (
                          <Typography key={comp!.complemento.id} className={stylesPerso["order_Addon"]}>
                            {`${comp!.complemento.title}  ${comp!.complemento.free || comp!.complemento.price === 0 ? "(Grátis)" : `+ ${formatarValorR$(comp!.complemento.price)}`}`}
                          </Typography>
                        );
                      } else {
                        return comp!.complemento.version.map((versao) => (
                          <Typography key={versao.id} className={stylesPerso["order_AddonVersion"]}>
                            {`${comp!.complemento.title} (${versao.title})  ${versao.free || versao.price === 0 ? "(Grátis)" : `+ ${formatarValorR$(versao.price)}`}`}
                          </Typography>
                        ));
                      }
                    })
                  ) : (
                    <Typography className={stylesPerso["order_Addon"]}>
                      {order.complementos.length === 0 ? "Esse item não possui complementos" : "Nenhum complemento selecionado"}
                    </Typography>
                  )}
                </Grid2>
              )}
            </Grid2>
          </Grid2>

          {/* Rodapé com total e botões */}
          <Grid2 className={stylesPerso["order_Footer"]}>
            <Typography className={stylesPerso["order_Total"]}>
              Total: {formatarValorR$(totalPrice)}
            </Typography>
            <Grid2>
              {etapa !== "version" && (
                <ButtonPerson
                  text="Voltar"
                  className={stylesPerso['button_next']}
                  onClick={etapaAnterior}
                />
              )}
              {etapa !== "final" ? (
                <ButtonPerson
                  text="Próximo"
                  className={stylesPerso['button_next']}
                  // style={{ backgroundColor: tinycolor(settings?.cor_primaria || "#ff6600").toHexString(),}}
                  onClick={handleNext}
                />
              ) : (
                <ButtonPerson
                  text="Finalizar Pedido !"
                  className={stylesPerso['button_next']}
                  onClick={finalizeOrder}
                />
              )}
            </Grid2>
          </Grid2>
        </Grid2>
      </div>
    </Grid2>
  );


};

export default MenuItens;
