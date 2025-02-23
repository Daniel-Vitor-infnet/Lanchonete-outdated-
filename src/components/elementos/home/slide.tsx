import React from 'react';
import Slider from 'react-slick';
import logo from '../../../assets/img/logo.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ImageCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={logo} alt="Image 1" />
      </div>
      <div>
        <img src={logo} alt="Image 2" />
      </div>
      <div>
        <img src={logo} alt="Image 3" />
      </div>
    </Slider>
  );
};

export default ImageCarousel;
