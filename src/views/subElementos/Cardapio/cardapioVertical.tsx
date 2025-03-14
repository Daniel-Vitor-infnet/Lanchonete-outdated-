import * as React from 'react';
import cardsCategoriaDataJson from "@/utils/cardsCategoriaTemp.json";
import stylesCardCategoria from "@/styles/cardapio/Categoria.module.scss";
import cardsItensDataJson from "@/utils/cardsItemTemp.json";
import { Card, CardContent, Typography, Grid2, Tab, Box, Tabs } from "@/libs/mui";
import { mixins, CardCategoria } from '@/components';

const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const VerticalTabs: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid2 sx={{ p: 3 }} role="tabpanel">
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {cardsCategoriaDataJson.map((card: any, index: number) => (
            <Tab key={index} label={card.title} {...a11yProps(index)} />
          ))}
        </Tabs>

        <Grid2 sx={{ p: 3 }}>
          {cardsCategoriaDataJson.map((item: any, index: number) => {
            if (value === index) {
              const itensDaCategoria = cardsItensDataJson.find(card => card.category === item.title)?.items || null;
              if (true) {
                return <CardCategoria key={index} cardsItens={itensDaCategoria} stylesPerso={stylesCardCategoria} />;
              } else {
                return (
                      <Typography>Nenhum item desse categoria</Typography>
                );
              }
            }
            return null;
          })}
        </Grid2>
      </Box>
    </Grid2>
  );
};

export default VerticalTabs;
