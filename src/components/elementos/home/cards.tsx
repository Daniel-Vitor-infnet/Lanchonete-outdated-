import * as React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";



const boxStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const cardStyles = {
    width: 300,
    padding: 2,
    textAlign: "center",
    boxShadow: 3,
    borderRadius: 2,
}


const SimpleCard: React.FC = () => {
    return (
        <Box sx={boxStyles}>
            <Card sx={cardStyles}>
                <CardContent>
                    <Typography variant="h4" fontWeight="bold">
                        Benevolente
                    </Typography>
                </CardContent>
                <Button variant="contained" sx={{ mt: 2 }}>
                    Saiba Mais
                </Button>
            </Card>
        </Box>
    );
};

export default SimpleCard;
