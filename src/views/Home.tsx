import React from 'react';
import styles from '../styles/Home.module.scss';
import { Grid, Box, Avatar } from '../components';
import HeaderPers from '../components/elementos/header';
import ImageCarousel from '../components/elementos/home/slide.tsx';
import BoxLayout from '../components/layout/BoxLayout.tsx';
import slide from '../assets/img/logo.png';
import logo1 from '../assets/img/logo1.png';
import slide2 from '../assets/img/teste.png';
import slide3 from '../assets/img/teste3.jpg';
import SimpleCard from '../components/elementos/home/cards.tsx';

const Home: React.FC = () => {
  return (
    <>
      <HeaderPers />

      <BoxLayout>
        <Grid className={styles.carousel}>
          <ImageCarousel images={[slide, slide2]} />
        </Grid>
        <Grid className={styles['avatar-container']}>
          <Avatar className={styles.avatar} alt="Logo" src={logo1} />
          <p className={styles.status}>FECHADO</p>
        </Grid>
        <Grid className={styles.cards}>
          <SimpleCard />
        </Grid>
      </BoxLayout>
    </>
  );
};

export default Home;
