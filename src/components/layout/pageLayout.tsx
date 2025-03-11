import React from "react";
import { Box, Grid2 } from '@/libs/mui';
import HeaderPers from "@/components/elementos/header";
import FooterPers from "@/components/elementos/footer";

const layoutStyles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "min(100dvh, 100vh)", // Garante que o layout ocupe toda a altura da tela
    overflowX: "hidden", // Esconde a barra de rolagem horizontal
  };

const contPrincipalStyles = {
  flex: 1, // Faz o conteúdo ocupar o espaço disponível
};


const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {


  return (
    <Grid2 sx={layoutStyles}>
      <HeaderPers />
      <Grid2 sx={contPrincipalStyles}>
        {children}
      </Grid2>
      <FooterPers />
    </Grid2>

  );
};




export default PageLayout;
