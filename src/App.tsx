import React from "react";
import Routes from "./routes";
import { AppProvider } from "./Context.jsx";
import "./styles.scss";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
