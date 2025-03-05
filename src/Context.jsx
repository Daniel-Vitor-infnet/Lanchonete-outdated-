import React, { createContext, useContext } from "react";
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
