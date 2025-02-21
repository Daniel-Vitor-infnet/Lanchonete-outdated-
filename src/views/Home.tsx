import { IconButton, Avatar, Button, Grid2, Box, Typography, CardNewItem, CustomList } from "../components";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';
import baby from "../assets/img/LogoBebe.png";
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { ACTIONS } from '../components/constants/actions'
import { useEffect, useState } from 'react';
import { getTitle } from "../utils/function";
import { list } from "../services/supabase";
import { useAppContext } from "../Context";





const Home: React.FC = () => {
  const { translate } = useAppContext();
  const navigate = useNavigate();
  const theme = useTheme();
  const name_baby = localStorage.getItem('nome_bebe') || `${translate('baby')}`;

  const [data, setData] = useState([]);




  const loadData = async () => {
    const d = await list();
    if (d) {
      setData(d);
    }
  }

  useEffect(() => {
    loadData();
  }, []);




  return (
    <>
      <Grid2
        container
        sx={{
          height: '25vh',
        }}
      >
        <Grid2
          size={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Grid2
            container
            sx={{
              marginTop: '1em',
            }}
          >
            <Grid2
              size={4}
              sx={{
                ...styles.centerBox,
              }}
            >
              <IconButton
                onClick={() => navigate('/dashboard')}
                sx={{
                  ...styles.iconButton,
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
              >
                <SignalCellularAltIcon
                  sx={{
                    ...styles.icon,
                    color: `${theme.palette.primary.main}`,
                  }}
                />
              </IconButton>
              <Box sx={styles.boxText}>
                <Typography
                  sx={{
                    ...styles.centerText,
                    ...styles.text2,
                  }}
                >
                  52 cm
                </Typography>
                <Typography
                  sx={{
                    ...styles.centerText,
                    ...styles.text3,
                  }}
                >
                  Comprimento
                </Typography>
              </Box>
            </Grid2>
            <Grid2
              size={4}
              sx={{
                ...styles.centerBox,
              }}
            >
              <Avatar
                src={baby}
                sx={{
                  width: '100px',
                  height: '100px',
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
              />
              <Box sx={styles.boxText}>
                <Typography
                  sx={{
                    ...styles.centerText,
                    ...styles.text1,
                  }}
                >
                  {name_baby}
                </Typography>
                <Typography
                  sx={{
                    ...styles.centerText,
                    ...styles.text3,
                  }}
                >
                  X Dias
                </Typography>
              </Box>
            </Grid2>
            <Grid2
              size={4}
              sx={{
                ...styles.centerBox,
              }}
            >
              <IconButton
                onClick={() => navigate('/settings')}
                sx={{
                  ...styles.iconButton,
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
              >
                <SettingsIcon
                  sx={{
                    ...styles.icon,
                    color: `${theme.palette.primary.main}`,
                  }}
                />
              </IconButton>
              <Box sx={styles.boxText}>
                <Typography
                  sx={{
                    ...styles.centerText,
                    ...styles.text2,
                  }}
                >
                  30 kg
                </Typography>
                <Typography
                  sx={{
                    ...styles.centerText,
                    ...styles.text3,
                  }}
                >
                  {translate('weight')}
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          size={12}
          sx={{
            position: 'relative',
            bottom: '-13px',
          }}
        >
          <Grid2 container>
            {ACTIONS.map((action, idx) => (
              <Grid2
                key={idx}
                size={4}
                sx={{
                  padding: '16px',
                }}
              >
                <CardNewItem {...action} />
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2
        container
        sx={{
          height: '75vh',
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Grid2
          size={12}
          sx={{
            height: '58vh',
            marginTop: '150px',
            overflow: 'auto',
          }}
        >
          <CustomList
            sx={{
              padding: '0 19px',}}
            items={data} />
        </Grid2>
      </Grid2>

    </>
  );
};


const styles = {
  centerBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconButton: {
    height: '2.5em',
    width: '2.5em',
  },
  icon: {
    fontSize: '1.5em',
  },
  centerText: {
    textAlign: 'center',
  },
  boxText: {
    marginTop: '.5em',
  },
  text1: {
    wordBreak: 'break-all',
    fontSize: '1.2em',
    fontWeight: '500',
    fontFamily: '"Lato", sans-serif',
  },
  text2: {
    wordBreak: 'break-all',
    fontSize: '.8em',
    fontWeight: '600',
    fontFamily: '"Lato", sans-serif',
  },
  text3: {
    wordBreak: 'break-all',
    fontSize: '.8em',
    fontWeight: '400',
  },
};


export default Home;
