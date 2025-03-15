import * as React from 'react';
import stylesCardCategoria from "@/styles/cardapio/Categoria.module.scss";
import cardsCategoriaDataJson from "@/utils/cardsCategoriaTemp.json";
import cardsItensDataJson from "@/utils/cardsItemTemp.json";
import { Card, CardContent, Typography, Grid2, Tab, Box, Tabs } from "@/libs/mui";
import { mixins, CardCategoria } from '@/components';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const mainContainer = {
  width: "100vw !important",
  height: "min(87vh, 87dvh) !important",
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
};

const boxPrincipal = {
  width: "90vw",
  maxWidth: "90vw",
  height: "min(80vh, 80dvh)",
  maxHeight: "min(80vh, 80dvh)",
  backgroundColor: "white",
  display: 'flex',
}

const barraLateralContainer = {
  borderRight: 5,
  borderColor: 'divider',
  backgroundColor: 'orange',
  display: 'flex',
  flexShrink: 0,
}

const barraLateral = {
  display: 'flex',
  gap: 1,
  width: '100%',
}

const cardContainer = {
  width: '97%',
  maxWidth: '97%',
  maxHeight: "96.7%",
  margin: 3,
  overflowX: 'auto',
}


const VerticalTabs: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid2 sx={mainContainer} role="tabpanel">
      <Box sx={boxPrincipal}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={barraLateralContainer}
        >
          {cardsCategoriaDataJson.map((card: any, index: number) => (
            <Tab
              key={index}
              label={(
                <Box sx={barraLateral}>
                  <WhatsAppIcon fontSize="small" />
                  {card.title}
                </Box>
              )}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>

        <Grid2 >
          {cardsCategoriaDataJson.map((item: any, index: number) => {
            if (value === index) {
              const itensDaCategoria = cardsItensDataJson.find(card => card.category === item.title)?.items || null;
              if (itensDaCategoria) {
                return (
                  <Grid2 sx={cardContainer}>
                    <CardCategoria key={index} cardsItens={itensDaCategoria} stylesPerso={stylesCardCategoria} />
                  </Grid2>
                )
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
