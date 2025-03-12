import * as React from 'react';
import cardsCategoriaDataJson from "@/utils/cardsCategoriaTemp.json";
import stylesCardCategoria from "@/styles/cardapio/Categoria.module.scss";
import cardsItensDataJson from "@/utils/cardsItemTemp.json";
import { Card, CardContent, Typography, Grid2, Tab, Box, Tabs } from "@/libs/mui";
import { mixins, CardCategoria } from '@/components';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}



function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }


  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {cardsCategoriaDataJson.map((card: any, index: number) => (
          <Tab label={card.title} {...a11yProps(index)} />
        ))}
      </Tabs>

      {cardsCategoriaDataJson.map((item: any, index: number) => {
        const itensDaCategoria = cardsItensDataJson.find(card => card.category === item.title)?.items || [];

        return (
          <TabPanel value={value} index={index} key={index}>
            <CardCategoria cardsItens={itensDaCategoria} stylesPerso={stylesCardCategoria} />
          </TabPanel>
        );
      })}


    </Box>
  );
}