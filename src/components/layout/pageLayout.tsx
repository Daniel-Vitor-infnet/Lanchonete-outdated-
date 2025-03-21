import React from "react";
import { Grid2 } from "@/libs/mui";
import HeaderPers from "@/components/elementos/header";
import FooterPers from "@/components/elementos/footer";
import { useAppContext } from "@/Context";

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "min(100dvh, 100vh)",
  overflowX: "hidden",
};

const contPrincipalStyles = {
  flex: 1,
};

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { hideFooter } = useAppContext();

  return (
    <Grid2 sx={layoutStyles}>
      <HeaderPers />
      <Grid2 sx={contPrincipalStyles}>
        {children}
      </Grid2>
      {!hideFooter && <FooterPers />}
    </Grid2>
  );
};

export default PageLayout;
