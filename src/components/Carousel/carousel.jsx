// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const CarouselPage = () => {
// return ( 
//   <>
//   <Carousel >
// <div >
// <img src="https://campaign.kuikr.com/qb/covid19/delivery_fur_857x260_pwa.jpg" alt="error"/>

// </div>
// <div>
// <img src="https://campaign.kuikr.com/qb/covid19/retail_fur_857x260_pwa.jpg"  alt="error"/>

// </div>
// <div>
// <img src="https://campaign.kuikr.com/qb/19june19/wqa_857x260.jpg" alt= "error" />

// </div>
// </Carousel>
// </>
// );
// };

// export default CarouselPage;






import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import csl from "./carousel.module.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function CarouselPage() {
  return (
    <CarouselProvider
      className={csl.carousel_main}
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={3}
      infinite={true}
      visibleSlides={1}
    >
      <Slider>
        <Slide index={0}>
          <img
            style={{
              width: "100%",
              height:"350px",
              borderRadius: "5px",
            }}
            src="https://campaign.kuikr.com/qb/covid19/delivery_fur_857x260_pwa.jpg"
            alt="img"
          />
        </Slide>
        <Slide index={1}>
          <img
            style={{
              width: "100%",
              height:"350px",
              borderRadius: "5px",
            }}
            src="https://campaign.kuikr.com/qb/covid19/retail_fur_857x260_pwa.jpg"
            alt="img"
          />
        </Slide>
        <Slide index={2}>
          <img
            style={{
              width: "100%",
              height:"350px",
              borderRadius: "5px",
            }}
            src="https://campaign.kuikr.com/qb/19june19/wqa_857x260.jpg"
            alt="img"
          />
        </Slide>
       
      </Slider>
      <ButtonBack className={csl.carousel_prev_btn}>
        <BsChevronLeft />
      </ButtonBack>
      <ButtonNext className={csl.carousel_next_btn}>
        <BsChevronRight />
      </ButtonNext>
    </CarouselProvider>
  );
}