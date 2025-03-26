import * as React from 'react';
import styles from '@/styles/Cardapio.module.scss';
import stylesCardCardapio from "@/styles/cardapio/Itens.module.scss";
import cardsCardapioDataJson from "@/utils/cardsCardapioTemp.json";
import { Grid2, Tab, Box, Tabs, Typography } from "@/libs/mui";
import { CardsCardapio } from '@/components';
import { obterTamanhoTela, iconsSelect, footerVisibility } from "@/utils/function";


const a11yProps = (cardID: number) => {
  return {
    id: `vertical-tab-${cardID}`,
    'aria-controls': `vertical-tabpanel-${cardID}`,
  };
};

const VerticalTabs: React.FC = () => {
  const [selectedId, setSelectedId] = React.useState<number>(cardsCardapioDataJson[0].id);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const selectedCategory = cardsCardapioDataJson[newValue];
    setSelectedId(selectedCategory.id);
  };



  const selectedCategory = cardsCardapioDataJson.find((card) => card.id === selectedId);


  return (
    <Grid2 className={styles['main-container']} role="tabpanel">
      <Grid2 className={styles['box-principal']}>
        <Tabs
          orientation={obterTamanhoTela("vertical", null, null, "horizontal")}
          variant="scrollable"
          value={cardsCardapioDataJson.findIndex((card) => card.id === selectedId)}
          scrollButtons="auto"
          allowScrollButtonsMobile
          onChange={handleChange}
          className={styles['barra-lateral-container']}
          sx={{
            ".MuiTabs-scrollButtons": {
              width: "auto", // Ajusta o tamanho dos botões para evitar espaço extra
            },
            ".MuiTabs-scrollButtons.Mui-disabled": {
              display: "none", // Esconde os botões quando não necessários
            },
          }}
        >
          {cardsCardapioDataJson.map((categorias: any) => (
            <Tab key={categorias.id} className={styles['barra-lateral-subcontainer']} label={
              <Grid2 className={styles['barra-lateral-conteudo']}>
                <Grid2>
                  {iconsSelect(categorias.icon, obterTamanhoTela(0.9, 0.8, null, null, 1.3))}
                </Grid2>
                <Typography className={styles['barra-lateral-categoria']}>
                  {categorias.title}
                </Typography>
              </Grid2>
            } {...a11yProps(categorias.id)} />
          ))}
        </Tabs>
        <Grid2 className={styles['card-container']}>
          {selectedCategory && (
            <CardsCardapio
              key={selectedCategory.id}
              cardsCardapio={selectedCategory.items}
              stylesPerso={stylesCardCardapio}
            />
          )}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default VerticalTabs;
