import React from 'react';
import { Grid2, Paper, Typography, Avatar } from '@/libs/mui';
import stylesPerso from "@/styles/pageLayout/Header.module.scss";
import { obterTamanhoTela, iconsSelect } from "@/utils/function";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";






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
        <NavegacaoButton
          to="/Cardapio"
          label="Cardápio"
          className={`${stylesPerso['botaoNav']} ${location.pathname === '/Cardapio' ? stylesPerso['ativo'] : ''}`}
        />
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





interface Props {
  to: string;
  label: string;
  className?: string;
}

function NavegacaoButton({ to, label, className }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Button
      variant={isActive ? "contained" : "outlined"}
      color={isActive ? "primary" : "inherit"}
      onClick={() => navigate(to)}
      className={className}
    >
      {label}
    </Button>
  );
}