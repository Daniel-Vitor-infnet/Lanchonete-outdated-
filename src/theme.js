import { createTheme } from '@mui/material/styles';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#D1C4E9', 
      main: '#673AB7',  
      dark: '#512DA8',  
      contrastText: '#fff', 
    },
    secondary: {
      light: '#B39DDB',
      main: '#9575CD',
      dark: '#7E57C2',
      contrastText: '#000',
    },
    background: {
      default: '#f5f5f5', 
      paper: '#ffffff',   
    },
  },
});


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#FFCCBC', 
      main: '#FF7043',  
      dark: '#BF360C', 
      contrastText: '#fff', 
    },
    secondary: {
      light: '#FFAB91',
      main: '#FF5722',
      dark: '#D84315',
      contrastText: '#000',
    },
    background: {
      default: '#121212', 
      paper: '#1D1D1D',   
    },
  },
});
