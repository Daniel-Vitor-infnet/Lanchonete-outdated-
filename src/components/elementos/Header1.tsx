import React from 'react';
import { Grid2, Paper, Typography, Avatar } from '@/libs/mui';
import stylesPerso from "@/styles/pageLayout/Header.module.scss";
import { obterTamanhoTela, iconsSelect } from "@/utils/function";






const HeaderPers: React.FC = () => {

  return (
    <Grid2 className={stylesPerso['main-container']}>
      <Grid2 className={stylesPerso['logo']}>
        <img src='@/assets/img/logo.png' alt="Logo" />
      </Grid2>
      <Grid2 className={stylesPerso['status']}>
        <Typography>
          Online
        </Typography>
      </Grid2>
      <Grid2 className={stylesPerso['menu']}>
        <Avatar className={stylesPerso['avatar']}>
          {iconsSelect("mui-geral-AccountCircle", null, "#ffffff")}
        </Avatar>
        <Typography>
          teste
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default HeaderPers;
