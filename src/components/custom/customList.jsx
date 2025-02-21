import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import CribIcon from '@mui/icons-material/Crib';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SpaIcon from '@mui/icons-material/Spa';
import { useAppContext } from "../../Context";
import { useTheme } from '@mui/material/styles';
import { generateSubtitle } from "../../utils/function";
import { useNavigate } from 'react-router-dom';

const CustomList = ({ items, ...props }) => {
    const { translate } = useAppContext();
    const theme = useTheme();
    const navigate = useNavigate();


    const actionTypeListToInt = {
        1: 'sleep',
        2: 'eat',
        3: 'diaper',
    };

    const typeColor = {
        1: '#4b10a9',
        2: '#47c869',
        3: '#f4cc1d',
    };

    const getIcon = (action_type) => {
        switch (action_type) {
            case 1:
                return <CribIcon />;
            case 2:
                return <RestaurantMenuIcon />;
            case 3:
                return <SpaIcon />;
            default:
                return <RestaurantMenuIcon />;
        }
    };



    return (
        <List {...props}>
            {
                items.map((item, index) => {
                    const typeStr = actionTypeListToInt[item.action_type];
                    return (
                        <ListItem
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: "60px",
                                marginTop: "1em"
                            }}
                            id={`new-item-list-${index}`}
                            onClick={() => navigate(`/${item.action_type}/${item.id}`)}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    sx={{ bgcolor: typeColor[item.action_type] }}
                                >
                                    {getIcon(item.action_type)}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={translate(typeStr)}
                                secondary={generateSubtitle(item, translate)}
                            />
                        </ListItem>
                    );
                })
            }
        </List>
    );
};

export default CustomList;
