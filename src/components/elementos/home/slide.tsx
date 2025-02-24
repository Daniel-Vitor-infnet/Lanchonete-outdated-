import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Grid } from '../../index';



interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop
      style={{ width: '100%', height: '100%', display: 'flex' }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ocupa todo o contêiner mantendo a proporção
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
