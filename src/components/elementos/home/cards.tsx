import * as React from "react";
import { Card, CardContent, CardMedia, CardActionArea, Typography, Button, Box } from "@mui/material";
import logo from "../../../assets/img/logo1.png";


const cards = [
    {
        id: 1,
        title: 'Plants',
        description: 'Plants are essential for all life.',
        logo: logo,
    },
    {
        id: 2,
        title: 'Animals',
        description: 'Animals are a part of nature.',
        logo: logo,
    },
    {
        id: 3,
        title: 'Humans',
        description: 'Humans depend on plants and animals for survival.',
        logo: logo,
    },
];

const boxStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', // Antes era 200px fixo
    gap: '20px', // Antes era 2 (mui usa rem), agora um valor mais visualmente confortável
    padding: '20px', // Adiciona espaçamento nos lados
    backgroundColor: 'blueviolet',
  };
  

const cardStyle = {
    width: '100%',
    height: '100%',
    marginLeft: '19px',
}

const mediaStyle = {
    height: "194px",
}

const cardTitleStyle = {
    color: 'red', 
    fontFamily: 'PlaywriteITModerna, Arial, sans-serif',
    fontSize: '17px',
}

const cardDrescripStyle = {
    color: 'red', 
    fontFamily: 'PlaywriteITModerna, Arial, sans-serif',
    marginTop: '10px',
}

function SimpleCard() {
    const [selectedCard, setSelectedCard] = React.useState(0);
    return (
        <Box sx={boxStyle}>
            {cards.map((card, index) => (
                <Card sx={cardStyle}>
                    <CardActionArea
                        onClick={() => setSelectedCard(index)}
                        data-active={selectedCard === index ? '' : undefined}
                        sx={{
                            height: '100%',
                            '&[data-active]': {
                                backgroundColor: 'action.selected',
                                '&:hover': {
                                    backgroundColor: 'action.selectedHover',
                                },
                            },
                        }}
                    >
                        <CardContent sx={{ height: '100%' }}>
                        <CardMedia sx={mediaStyle} component="img" image={card.logo} alt="Paella dish"/>

                            <Typography variant="h5" align="center" component="div" style={cardTitleStyle}>
                                {card.title}
                            </Typography>
                            <Typography variant="body2"  style={cardDrescripStyle}>
                                {card.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}

export default SimpleCard;