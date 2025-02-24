import React from 'react';
import Slider from 'react-slick';
import logo from '../../../assets/img/logo.png';
import logo2 from '../../../assets/img/teste.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from '../../index';


const ImageCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (index: number) => (
      <button>{index + 1}</button>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
        <ul style={{ margin: '0', padding: '0', display: 'flex', justifyContent: 'center' }}>{dots}</ul>
      </div>
    )
  };

  const containerStyles = {
    width: '25vw',
    height: '15vh',
    backgroundColor: 'mediumspringgreen',
  };

  const images = [logo, logo2, logo];

  return (
    <Grid sx={containerStyles}>
      <div style={{ width: '100%', height: '100%' }}>  {/* Wrapper para garantir tamanho */}
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
              <img
                src={img}
                alt={`Image ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16 / 9',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Grid>
  );
};

export default ImageCarousel;
