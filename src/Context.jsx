import React, { createContext, useContext } from "react";
import HeaderPers from "@/components/elementos/header";
import FooterPers from "@/components/elementos/footer";



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
