import * as React from 'react';
import cardsCategoriaDataJson from "@/utils/cardsCategoriaTemp.json";
import cardsItensDataJson from "@/utils/cardsCategoriaTemp.json";
import { Card, CardContent, Typography, Grid2, Tab, Box, Tabs } from "@/libs/mui";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface CardItem {
  id: number;
  id2: string;
  title: string;
}

interface CardItem2 {
  id: number;
  id2: string;
  title: string;
  description: string;
  image: string;
}

const cardsCategoriaData: CardItem[] = cardsCategoriaDataJson;
const cardsCategoriaData: CardItem2[] = cardsCategoriaDataJson;

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
        {cardsCategoriaData.map((card: CardItem, index: number) => (
          <Tab label={card.title} {...a11yProps(index)} />
        ))}
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}