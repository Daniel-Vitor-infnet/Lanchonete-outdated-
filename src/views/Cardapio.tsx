import * as React from 'react';
import styles from '@/styles/Cardapio.module.scss';
import stylesCardCardapio from "@/styles/cardapio/Itens.module.scss";
import cardsCardapioDataJson from "@/utils/cardsCardapioTemp.json";
import { Grid2, Tab, Box, Tabs } from "@/libs/mui";
import { CardsCardapio } from '@/components';
import { obterTamanhoTela, iconsSelect } from "@/utils/function";


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
    <Grid2 className={styles['main-container']} role="tabpanel">
      <Box className={styles['box-principal']}>
        <Tabs
          orientation={tipoMenu}
          variant="scrollable"
          value={cardsCardapioDataJson.findIndex((card) => card.id === selectedId)}
          onChange={handleChange}
          className={styles['barra-lateral-container']}
        >
          {cardsCardapioDataJson.map((categorias: any) => (
            <Tab key={categorias.id} label={
              <Box className={styles['barra-lateral']}>
                {iconsSelect(categorias.icon, obterTamanhoTela("pequeno", "muitoPequeno"))}
                {categorias.title}
              </Box>
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
      </Box>
    </Grid2>
  );
};

export default VerticalTabs;
