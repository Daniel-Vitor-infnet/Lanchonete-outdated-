import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

// Tipo dos dados que vêm do Supabase (ajuste conforme os campos que existem)
interface SiteSettings {
  cor_primaria: string;
  // Adicione outros campos se necessário
  [key: string]: any;
}

// Tipo completo do contexto
interface AppContextType {
  hideFooter: boolean;
  setHideFooter: React.Dispatch<React.SetStateAction<boolean>>;
  settings: SiteSettings | null;
  setSettings: React.Dispatch<React.SetStateAction<SiteSettings | null>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [hideFooter, setHideFooter] = useState<boolean>(false);
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  return (
    <AppContext.Provider
      value={{
        hideFooter,
        setHideFooter,
        settings,
        setSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
