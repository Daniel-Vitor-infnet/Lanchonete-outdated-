import React from 'react';
import { Box, Typography, IconButton, Grid2 } from '@/libs/mui';
import styles from "@/styles/pageLayout/Footer.module.scss";
import { iconsSelect } from '@/utils/function';

const Footer: React.FC = () => {
  return (
    <Box className={styles['footer-container']}>
      {/* Nome da empresa */}
      <Typography gutterBottom className={styles['company-name']}>
        Lanchonete
      </Typography>

      {/* Contatos e informações */}
      <Grid2 className={styles['grid-container']}>
        <Grid2 className={styles['contact-container']}>
          <Typography className={styles['icon-text']}>
            {iconsSelect("mui-geral-Phone", null, "#4caf50")} 
            +55 11 99999-9999
            {iconsSelect("mui-geral-LocationOn", null, "#ff5722")} 
            Rua Exemplo, 123 - Cidade
            {iconsSelect("mui-geral-Email", null, "#ffcc00")} 
            exemplo@gmail.com
          </Typography>
        </Grid2>
      </Grid2>

      {/* Redes Sociais */}
      <Box className={styles['social-media-container']}>
        <IconButton href="https://facebook.com" target="_blank">
          {iconsSelect("mui-geral-Facebook", null, "#1877F2")}
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank">
          {iconsSelect("mui-geral-Instagram", null, "#E4405F")}
        </IconButton>
        <IconButton href="https://wa.me/5511999999999" target="_blank">
          {iconsSelect("mui-geral-WhatsApp", null, "#25D366")}
        </IconButton>
      </Box>

      {/* Direitos autorais */}
      <Typography className={styles['copyright-text']}>
        © 2025 Lanchonete. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
