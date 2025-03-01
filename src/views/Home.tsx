import React from 'react';
import styles from '../styles/Home.module.scss';
import { Grid2, Box, Avatar } from '@mui/material';
import HeaderPers from '../components/elementos/header.tsx';
import FooterPers from '../components/elementos/footer.tsx';
import ImageCarousel from '../components/elementos/home/slide.tsx';
import BoxLayout from '../components/layout/BoxLayout.tsx';
import slide from '../assets/img/logo.png';
import logo from '../assets/img/Logo.png';
import slide2 from '../assets/img/Sorvete.png';
import SimpleCard from '../components/elementos/cards.tsx';

const Home: React.FC = () => {
  return (
    <Grid2 className={styles.home}> {/* Apenas para trazer o scss pai */}
      <HeaderPers />

      <BoxLayout>
        <Grid2 className={styles.carousel}>
          <ImageCarousel images={[slide, slide2]} />
        </Grid2>
        <Grid2 className={styles['avatar-container']}>
          <Avatar className={styles.avatar} alt="Logo" src={logo} />
          <p className={styles.status}>FECHADO</p>
        </Grid2>
        <SimpleCard />
      </BoxLayout>
      <FooterPers />
    </Grid2>
  );
};

export default Home;
