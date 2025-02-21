import { createContext, useContext, useEffect, useState } from 'react';
import { Alert, Snackbar } from './components';
import { createClient } from '@supabase/supabase-js';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import dayjs from 'dayjs';

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(duration);

const AppContext = createContext(null);

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const TIMEOUT_DURATION = 6000;

const AppProvider = ({ children }) => {
  const { t: translate, i18n } = useTranslation();

  const [snackOpen, setSnackOpen] = useState({ open: false, message: '' });
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('');
  const [alertVariant, setAlertVariant] = useState(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeLanguage = (Lang) => {
    i18n.changeLanguage(Lang);
    localStorage.setItem('language', Lang);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const showSnackMessage = (message) => {
    setSnackOpen({ open: true, message });
  };

  const showAlertMessage = (message, severity, variant) => {
    setAlertMessage(message);
    setAlertSeverity(severity);
    setAlertVariant(variant);

    setTimeout(() => {
      setAlertMessage('');
      setAlertSeverity('');
      setAlertVariant(null);
    }, TIMEOUT_DURATION);
  };

  const handleClose = () => {
    setSnackOpen({ open: false, message: '' });
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const sharedState = {
    changeLanguage,
    showSnackMessage,
    showAlertMessage,
    toggleTheme, 
    supabase,
    translate,
    isDarkMode, 
  };

  useEffect(() => {
    const storeLanguage = localStorage.getItem('language');

    if (storeLanguage) {
      changeLanguage(storeLanguage);
    } else {
      const navLang = navigator.language.split('-')[0];
      changeLanguage(navLang);
    }
  }, []);

  return (
    <AppContext.Provider value={sharedState}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
        <Snackbar
          autoHideDuration={TIMEOUT_DURATION}
          onClose={handleClose}
          open={snackOpen.open}
          message={snackOpen.message}
        />
        {alertMessage && (
          <Alert severity={alertSeverity} variant={alertVariant}>
            {alertMessage}
          </Alert>
        )}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
};

export default AppProvider;
