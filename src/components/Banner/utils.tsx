import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from '@mohammedsrehan/react-responsive-carousel';
// impo
import i1 from './Intro.png';
import i2 from './baner2.png';
import i3 from './banner3.png';
import Style from './Bannerstyle.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarouselComponent() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className={Style.banner}>
      <Slider {...settings}>
        <img src={i1} className={Style.imgBanner} />
        <img src={i2} className={Style.imgBanner} />
        <img src={i3} className={Style.imgBanner} />
      </Slider>
    </div>
    // <div>
    //     <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}  >
    //         <div>
    //             <img src={i1} className = {Style.imgBanner}/>

    //         </div>
    //         <div>
    //             <img src={i2} className ={Style.imgBanner}/>
    //         </div>
    //         <div>
    //             <img src={i3} className = {Style.imgBanner}/>
    //         </div>
    //     </Carousel>
    // </div>
  );
}
