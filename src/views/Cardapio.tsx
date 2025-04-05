import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import styles from '@/styles/Cardapio.module.scss';
import { Grid2, Tab, Tabs, Typography } from "@/libs/mui";
import { CardsCardapio } from '@/components';
import { definirPorTamanhoTela, iconsSelect, handleStatusDataBase } from "@/utils/function";
import MenuCardapio from "@/components/layout/cardapio/menuCardapio";
import { useCategorias } from '@/hooks/useCategorias'
import { Comida } from "@/types";


const a11yProps = (cardID: number) => ({
  id: `vertical-tab-${cardID}`,
  'aria-controls': `vertical-tabpanel-${cardID}`,
});

const VerticalTabs: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: categoriasArray = [], isLoading, error } = useCategorias();

  const tamanhoTela = definirPorTamanhoTela({ desktop: "vertical", mobile: "horizontal" });
  const tamanhoIcone = definirPorTamanhoTela({ desktop: 0.9, laptop: 0.8, mobile: 1.3 });

  const urlConvert = (id: string, title: string): string =>
    (id.match(/\d/g)?.slice(0, 3).join('')) + title.toLowerCase();

  const categoriasAtivas = categoriasArray.filter((categoria) => categoria.sale !== false);
  const pagID = id || null;

  const [itemEscolhido, setItemEscolhido] = useState<Comida | null>(null);

  useEffect(() => {
    if (!pagID && categoriasAtivas.length > 0) {
      navigate(`/cardapio/${urlConvert(categoriasAtivas[0].id, categoriasAtivas[0].title)}`);
    }
  }, [pagID, categoriasAtivas, navigate]);

  const currentIndex = categoriasAtivas.findIndex((categoria) => urlConvert(categoria.id, categoria.title) === pagID);
  const selectedCategory = categoriasAtivas[currentIndex];

  useEffect(() => {
    document.body.style.overflow = itemEscolhido ? 'hidden' : '';
  }, [itemEscolhido]);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    const selectedCategory = categoriasAtivas[newIndex];
    if (selectedCategory) {
      navigate(`/cardapio/${urlConvert(selectedCategory.id, selectedCategory.title)}`);
    }
  };

  const estado = handleStatusDataBase(isLoading, error, categoriasArray.length === 0);
  if (estado) return estado;

  return (
    <Grid2 className={styles['main-container']}>
      <Grid2 className={styles['box-principal']}>
        <Tabs
          orientation={tamanhoTela}
          variant="scrollable"
          value={currentIndex === -1 ? 0 : currentIndex}
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
                    {iconsSelect(categoria.icon, tamanhoIcone)}
                  </Grid2>
                  <Typography className={styles['barra-lateral-categoria']}>
                    {categoria.title}
                  </Typography>
                </Grid2>
              }
              {...a11yProps(Number(categoria.id.slice(0, 3)))}
            />
          ))}
        </Tabs>

        <Grid2 className={styles['card-container']}>
          {selectedCategory && (
            <CardsCardapio
              key={selectedCategory.id}
              itensCardapio={selectedCategory.id}
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