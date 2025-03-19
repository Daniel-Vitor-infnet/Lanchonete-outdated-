import * as React from 'react';
import styles from '@/styles/Cardapio.module.scss';
import stylesCardCardapio from "@/styles/cardapio/Itens.module.scss";
import cardsCardapioDataJson from "@/utils/cardsCardapioTemp.json";
import { Grid2, Tab, Box, Tabs } from "@/libs/mui";
import { CardsCardapio } from '@/components';
import iconSelect from "@/utils/function/iconsSelect.tsx";

const a11yProps = (cardID: number) => {
  return {
    id: `vertical-tab-${cardID}`,
    'aria-controls': `vertical-tabpanel-${cardID}`,
  };
};

const VerticalTabs: React.FC = () => {
  const [selectedId, setSelectedId] = React.useState<number>(cardsCardapioDataJson[0].id);

  const batata = true;
  const tipoMenu = batata ? "vertical" : "horizontal";


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const selectedCategory = cardsCardapioDataJson[newValue];
    setSelectedId(selectedCategory.id);
  };

  const selectedCategory = cardsCardapioDataJson.find((card) => card.id === selectedId);

  return (
    <Grid2 className={styles.mainContainer} role="tabpanel">
      <Box className={styles.boxPrincipal}>
        <Tabs
          orientation={tipoMenu}
          variant="scrollable"
          value={cardsCardapioDataJson.findIndex((card) => card.id === selectedId)}
          onChange={handleChange}
          className={styles.barraLateralContainer}
        >
          {cardsCardapioDataJson.map((categorias: any) => (
            <Tab key={categorias.id} label={
              <Box className={styles.barraLateral}>
                {iconSelect(categorias.icon, "pequeno")}
                {categorias.title}
              </Box>
            } {...a11yProps(categorias.id)} />
          ))}
        </Tabs>
        <Grid2 className={styles.cardContainer}>
          {selectedCategory && (
            <CardsCardapio
              key={selectedCategory.id}
              cardsCardapio={selectedCategory.items}
              stylesPerso={stylesCardCardapio}
            />
          )}
        </Grid2>

      </Box>
    </Grid2>
  );
};

export default VerticalTabs;
