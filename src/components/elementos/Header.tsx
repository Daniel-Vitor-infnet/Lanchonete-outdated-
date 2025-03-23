import React from 'react';
import { Grid2, Paper, Typography, Avatar } from '@/libs/mui';
import stylesPerso from "@/styles/pageLayout/Header.module.scss";
import { obterTamanhoTela, iconsSelect } from "@/utils/function";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MobileMenu from "@/components/elementos/button/MobileMenu";

const pages = [
  { to: "/", label: "Home" },
  { to: "/Cardapio", label: "Cardapio" },
  { to: "/Pedidos", label: "Pedidos" },
  { to: "/Sobre", label: "Sobre" },
  { to: "/Login", label: "Login" },
  { to: "/Perfil", label: "Meu Perfil" },
]


const HeaderPers: React.FC = () => {

  const logado = false;
  const mobile = obterTamanhoTela(false, false, false, true, true);


  return (
    <Grid2 className={stylesPerso['main-container']}>
      <Grid2 className={stylesPerso['logo']}>
        <img src='src/assets/img/logo.png' alt="Logo" />
      </Grid2>
      <Grid2 className={stylesPerso['extras']}>
        <Grid2 className={stylesPerso['status']}>
          {iconsSelect("mui-geral-Circle", 0.7, "lch(71.85 94.03 134.67)", stylesPerso['status-icon'])}
          <Typography>
            aberto
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2 className={stylesPerso['menu']}>
        {/* Lógica do menu para desktop ou mobile */}
        {mobile ? (
          <MobileMenu pages={pages} logado={logado} />
        ) : (
          pages
          .filter((page) => {
            if (page.to === "/Perfil") return false;
            return true;
          })
          .map((page) => {
            if (logado && page.to === "/Login") {
              return (
                <Avatar className={stylesPerso['conta']}>
                  {iconsSelect("mui-geral-AccountCircle", null, "#666666")}
                </Avatar>
              )
            } else {
              return (
                <NavegacaoButton
                  key={page.to}
                  to={page.to}
                  label={page.label}
                  className={`${stylesPerso['botaoNav']} ${location.pathname === page.to ? stylesPerso['ativo'] : ''}`}
                />
              );
            }
          })
        )}
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


