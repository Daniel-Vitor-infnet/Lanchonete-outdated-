import React from "react";
import { Box } from '@/libs/mui'; 
import HeaderPers from "@/components/elementos/header";
import FooterPers from "@/components/elementos/footer";

const layoutStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flex: 1,
    paddingTop: "60px",  // Garante espaço para o Header
    paddingBottom: "60px",  // Garante espaço para o Footer
  },
};

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={layoutStyles.container}>
      {/* Header */}
      <HeaderPers />

      {/* Área do Conteúdo */}
      <Box sx={layoutStyles.content}>
        {children}
      </Box>

      {/* Footer */}
      <FooterPers />
    </Box>
  );
};

export default PageLayout;
