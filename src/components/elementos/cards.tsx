import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, CardActionArea, Typography, Box } from "@/libs/mui";

// Definir um tipo para os cards
interface CardItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

const boxStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
    padding: "20px",
    backgroundColor: "blueviolet",
};

const cardStyle = {
    width: "100%",
    height: "100%",
    marginLeft: "19px",
};

const mediaStyle = {
    height: "194px",
};

const cardTitleStyle = {
    color: "red",
    fontFamily: "PlaywriteITModerna, Arial, sans-serif",
    fontSize: "17px",
};

const cardDescripStyle = {
    color: "red",
    fontFamily: "PlaywriteITModerna, Arial, sans-serif",
    marginTop: "10px",
};

function SimpleCard() {
    const [cards, setCards] = useState<CardItem[]>([]);

    useEffect(() => {
        fetch("/cardsCategoriaTemp.json")
            .then((res) => res.json())
            .then((data: { cards: CardItem[] }) => setCards(data.cards))
            .catch((error) => console.error("Erro ao carregar cards:", error));
    }, []);

    return (
        <Box sx={boxStyle}>
            {cards.map((card) => (
                <Card key={card.id} sx={cardStyle}>
                    <CardActionArea>
                        <CardContent sx={{ height: "100%" }}>
                            <CardMedia sx={mediaStyle} component="img" image={card.image} alt={card.title} />
                            <Typography variant="h5" align="center" component="div" style={cardTitleStyle}>
                                {card.title}
                            </Typography>
                            <Typography variant="body2" style={cardDescripStyle}>
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
