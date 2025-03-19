import React from 'react';
import styles from '@/styles/Home.module.scss';
import { Grid2, Box, Avatar } from '@/libs/mui';
import slide from '@/assets/img/logo.png';
import logo from '@/assets/img/Logo.png';
import slide2 from '@/assets/img/Sorvete.png';
import cardsCategoriaDataJson from "@/utils/cardsCardapioTemp.json";
import stylesCardCategoria from "@/styles/cardapio/Categoria.module.scss";
import { ImageCarousel, CardsList, BoxLayout } from '@/components';


const Home: React.FC = () => {
  return (
    <Grid2 className={styles.home}> {/* Apenas para trazer o scss pai */}
      <BoxLayout>
        <Grid2 className={styles.carousel}>
          <ImageCarousel images={[slide, slide2]} />
        </Grid2>
        <Grid2 className={styles['avatar-container']}>
          <Avatar className={styles.avatar} alt="Logo" src={logo} />
          <p className={styles.status}>FECHADO</p>
        </Grid2>
        <CardsList cardsCardapio={cardsCategoriaDataJson} stylesPerso={stylesCardCategoria} />
      </BoxLayout>
    </Grid2>
  );
};

export default Home;
