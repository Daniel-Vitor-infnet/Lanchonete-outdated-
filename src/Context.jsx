import React, { createContext, useContext } from "react";
import {FooterPers, HeaderPers} from '@/components';


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      <HeaderPers />
      {children}
      <FooterPers />
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
