import React, { createContext, useContext } from "react";
import HeaderPers from "@/components/elementos/header";
import FooterPers from "@/components/elementos/footer";
import { PageLayout } from '@/components';





const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      <PageLayout>
        {children}
      </PageLayout>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
