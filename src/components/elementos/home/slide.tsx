import React from 'react';
import Slider from 'react-slick';
import logo from '../../../assets/img/logo.png';
import logo2 from '../../../assets/img/teste.png';
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
          <div >
            <img src={logo2} alt="Image 1" style={{ width: '100%', height: '100%'}} />
          </div>
          <div >
            <img src={logo2} alt="Image 2" style={{ width: '100%', height: '100%'}} />
          </div>
          <div >
            <img src={logo2} alt="Image 3" style={{ width: '100%', height: '100%'}} />
          </div>
        </Slider>
  );
};

export default ImageCarousel;
