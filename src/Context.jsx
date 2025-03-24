import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [hideFooter, setHideFooter] = useState(false);

  return (
    <AppContext.Provider value={{ hideFooter, setHideFooter }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
