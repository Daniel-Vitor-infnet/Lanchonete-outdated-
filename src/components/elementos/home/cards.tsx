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
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
    gap: 2,
    backgroundColor: 'blueviolet',
}

const cardStyle = {
    width: '100%',
    height: '100%',
    marginLeft: '19px',
}

const cardStyle2 = {
    height: "194px",

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
                            <Typography variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.description}
                            </Typography>
                            <CardMedia sx={cardStyle2} component="img" image={card.logo} alt="Paella dish"/>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}

export default SimpleCard;