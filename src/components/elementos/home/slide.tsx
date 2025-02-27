import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Grid2 } from '@mui/material';

// Configuração para personalização de setas e bolinhas
const swiperStyles = {
  '--swiper-navigation-color': 'purple', // Cor das setas
  '--swiper-pagination-color': 'purple', // Cor das bolinhas ativas
  '--swiper-pagination-bullet-inactive-color': '#bbb', // Cor das bolinhas inativas
  '--swiper-pagination-bottom': 'auto', // Remove a posição padrão inferior
  '--swiper-pagination-top': '10px', // Move as bolinhas para cima
} as React.CSSProperties;

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <Grid2 sx={{ width: '100%', height: '100%', display: 'flex' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        style={swiperStyles} // Aplicação dos estilos personalizados
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid2>
  );
};

export default ImageCarousel;
