import React from "react";
import { Grid2 } from "@/libs/mui";
import HeaderPers from "@/components/elementos/Header";
import FooterPers from "@/components/elementos/Footer";
import { useAppContext } from "@/Context";



const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { hideFooter } = useAppContext();

  return (
    <Grid2 >
      <HeaderPers />
      <Grid2 >
        {children}
      </Grid2>
      {!hideFooter && <FooterPers />}
    </Grid2>
  );
};

export default PageLayout;
