import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import styles from '@/styles/Cardapio.module.scss';
import stylesCardCardapio from "@/styles/cardapio/Itens.module.scss";
import cardapioDataJson from "@/utils/CardapioTemp.json";
import { Grid2, Tab, Tabs, Typography } from "@/libs/mui";
import { CardsCardapio } from '@/components';
import { definirPorTamanhoTela, iconsSelect } from "@/utils/function";
import MenuCardapio from "@/components/layout/cardapio/menuCardapio";
import type { ItemEscolhidoType } from "@/components/layout/cardapio/menuCardapio";


const a11yProps = (cardID: number) => ({
  id: `vertical-tab-${cardID}`,
  'aria-controls': `vertical-tabpanel-${cardID}`,
});

interface CategoriaType {
  title: string;
  id: number;
  id2: string;
  description: string;
  image: string;
  icon: string;
  stock: boolean;
  sale: boolean;
  items: any[];
};


// Apenas para n deixar com o nome de exportação 
const categoriasArray = cardapioDataJson;

const VerticalTabs: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Filtra as categorias que estão à venda
  const categoriasAtivas: CategoriaType[] = categoriasArray.filter((categoria) => categoria.sale !== false);

  // Usa o id numérico da URL
  const categoryId = id ? Number(id) : null;

  // Se nenhum id for passado, redireciona para a primeira categoria
  useEffect(() => {
    if (!categoryId && categoriasAtivas.length > 0) {
      navigate(`/cardapio/${categoriasAtivas[0].id}`);
    }
  }, [categoryId, categoriasAtivas, navigate]);

  // Determina o índice da categoria selecionada com base no id
  const currentIndex = categoriasAtivas.findIndex((categoria) => categoria.id === categoryId);

  // Responsavel por definir o item escolhido para abrir o menu
  const [itemEscolhido, setItemEscolhido] = useState<ItemEscolhidoType | null>(null);


  // Caso abra o menu, o scroll do body é desativado
  useEffect(() => {
    document.body.style.overflow = itemEscolhido ? 'hidden' : '';
  }, [itemEscolhido]);

  // Ao trocar de aba, navega para a rota com o id da categoria
  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    const selectedCategory = categoriasAtivas[newIndex];
    if (selectedCategory) {
      navigate(`/cardapio/${selectedCategory.id}`);
    }
  };

  const selectedCategory = categoriasAtivas[currentIndex];

  return (
    <Grid2 className={styles['main-container']}>
      <Grid2 className={styles['box-principal']}>
        <Tabs
          orientation={definirPorTamanhoTela({ desktop: "vertical", mobile: "horizontal" })}
          variant="scrollable"
          value={currentIndex}
          scrollButtons="auto"
          allowScrollButtonsMobile
          onChange={handleChange}
          className={styles['barra-lateral-container']}
          sx={{
            ".MuiTabs-scrollButtons": { width: "auto" },
            ".MuiTabs-scrollButtons.Mui-disabled": { display: "none" },
          }}
        >
          {categoriasAtivas.map((categoria) => (
            <Tab
              key={categoria.id}
              className={styles['barra-lateral-subcontainer']}
              label={
                <Grid2 className={styles['barra-lateral-conteudo']}>
                  <Grid2>
                    {iconsSelect(categoria.icon, definirPorTamanhoTela({ desktop: 0.9, laptop: 0.8, mobile: 1.3 }))}
                  </Grid2>
                  <Typography className={styles['barra-lateral-categoria']}>
                    {categoria.title}
                  </Typography>
                </Grid2>
              }
              {...a11yProps(categoria.id)}
            />
          ))}
        </Tabs>
        <Grid2 className={styles['card-container']}>
          {selectedCategory && (
            <CardsCardapio
              key={selectedCategory.id}
              itensCardapio={selectedCategory.items}
              stylesPerso={stylesCardCardapio}
              onClick={setItemEscolhido}
            />
          )}
        </Grid2>
      </Grid2>
      {itemEscolhido && (
        <MenuCardapio itemEscolhido={itemEscolhido} onClose={() => setItemEscolhido(null)} />
      )}
    </Grid2>
  );
};

export default VerticalTabs;
