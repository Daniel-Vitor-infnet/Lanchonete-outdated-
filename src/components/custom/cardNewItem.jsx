import { Box, Card, Fab, Typography } from "../index";
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';



const CardNewItem = ({ title, actionType, Icon, color }) => {
    const navigate = useNavigate();

    return <Card
        sx={{
            overflow: 'visible',
            borderRadius: '10%',
            paddingTop: '16px',
        }}
    >
        <Box sx={{ ...styles.box }}>
            <Icon
                sx={{
                    color: color,
                    fontSize: '2.5em',
                }}
            />
            <Typography
                sx={{
                    fonteSize: '.85em',
                    marginTop: '0.5em',
                    fontWeight: '700',
                    textAlign: 'center',
                    wordBreak: 'break-word',
                    width: '90%',
                }}
            >
                {title}
            </Typography>
        </Box>
        <Box sx={{ ...styles.box }}>
            <Typography
                sx={{
                    marginTop: '0.5em',
                    fontSize: '0.8em',
                    fontWeight: '400',
                    color: '#8f8f8f',
                }}

            >
                AddAlgo
            </Typography>
        </Box>
        <Box sx={{ ...styles.box }}>
            <Fab
                onClick={() => navigate(`new/${actionType}`)}
                sx={{
                    color: color,
                    backgroundColor: "#fff",
                    position: "relative",
                    bottom: "-20px"
                }}
            >
                <AddIcon />
            </Fab>
        </Box>

    </Card >


};

const styles = {
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};


export default CardNewItem;
