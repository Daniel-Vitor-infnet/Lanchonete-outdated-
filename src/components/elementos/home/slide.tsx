import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import logo from '../../../assets/img/logo.png';
import logo2 from '../../../assets/img/teste.png';
import { Grid } from '../../index';

const ImageCarousel: React.FC = () => {
  const images = [logo, logo2, logo];

  return (
    <Grid sx={{ width: '45vw', height: '45vh', backgroundColor: 'mediumspringgreen', overflow: 'hidden' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        style={{ width: '100%', height: '100%' }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

export default ImageCarousel;
