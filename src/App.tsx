import Routes from "./routes";
import { AppProvider } from "./Context";
import "./styles.scss";
import { useEffect } from "react";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import tinycolor from "tinycolor2";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

// Componente interno (não exporta!)
import { useAppContext } from "./Context";

const ConfigApplier = () => {
  const { data: settings } = useSiteSettings();
  const { setSettings } = useAppContext();

  useEffect(() => {
    if (settings?.cor_primaria) {
      const corBase = settings.cor_primaria;

      // Gera variações com tinycolor2
      const corSecundaria = tinycolor(corBase).lighten(15).toHexString();
      const corEscura = tinycolor(corBase).darken(10).toHexString();

      // Define como variáveis CSS globais
      document.documentElement.style.setProperty('--cor-tema', corBase);
      document.documentElement.style.setProperty('--cor-secundaria', corSecundaria);
      document.documentElement.style.setProperty('--cor-escura', corEscura);

      // Atualiza contexto global com settings
      setSettings(settings);
    }
  }, [settings]);

  return null;
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ConfigApplier />
        <Routes />
      </AppProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;