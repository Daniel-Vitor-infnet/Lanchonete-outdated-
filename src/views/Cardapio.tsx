import * as React from 'react';
import styles from '@/styles/Cardapio.module.scss';
import stylesCardCategoria from "@/styles/cardapio/Itens.module.scss";
import cardsCategoriaDataJson from "@/utils/cardsCardapioTemp.json";
import { Typography, Grid2, Tab, Box, Tabs } from "@/libs/mui";
import {CardsList } from '@/components';
import iconSelect from "@/utils/function/iconsSelect.tsx";

const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const VerticalTabs: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);

  const batata = true;
  const tipoMenu = batata ? "vertical" : "horizontal";

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid2 className={styles.mainContainer} role="tabpanel">
      <Box className={styles.boxPrincipal}>
        <Tabs
          orientation={tipoMenu}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={styles.barraLateralContainer}
        >
          {cardsCategoriaDataJson.map((card: any, index: number) => (
            <Tab
              key={index}
              label={
                <Box className={styles.barraLateral}>
                  {iconSelect(card.icon, "pequeno")}
                  {card.title}
                </Box>
              }
              {...a11yProps(index)}
            />
          ))}
        </Tabs>

        <Grid2>
          {cardsCategoriaDataJson.map((card: any, index: number) => {
            if (value === index) {
              const itensDaCategoria = card.items || null;
              return itensDaCategoria.length > 0 ? (
                <Grid2 className={styles.cardContainer}>
                  <CardsList key={index} cardsCardapio={itensDaCategoria} stylesPerso={stylesCardCategoria} />
                </Grid2>
              ) : (
                <Typography>Nenhum item dessa categoria</Typography>
              );
            }
            return null;
          })}
        </Grid2>
      </Box>
    </Grid2>
  );
};

export default VerticalTabs;
