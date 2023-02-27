import React, { useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

import { Box, Circle, Flex } from "@chakra-ui/react";

const ImageCenterSlide = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const CustomPrevArrow = ({ onClick, isDisabled }) =>
    !isDisabled && (
      <Circle
        as="button"
        variant="unstyled"
        position="absolute"
        zIndex={1}
        left="50px"
        top="50%"
        transform="translateY(-50%)"
        backgroundColor="white"
        size="50px"
        onClick={onClick}
      >
        <RiArrowLeftLine size={"30px"} color="black" />
      </Circle>
    );

  const CustomNextArrow = ({ onClick, isDisabled }) =>
    !isDisabled && (
      <Circle
        as="button"
        variant="unstyled"
        position="absolute"
        zIndex={1}
        right="50px"
        top="50%"
        transform="translateY(-50%)"
        backgroundColor="white"
        size="50px"
        onClick={onClick}
      >
        <RiArrowRightLine size="30px" color="black" />
      </Circle>
    );

  const settings = {
    dots: false,
    centerMode: true,
    infinite: false,
    centerPadding: "20%",
    speed: 400,
    slidesToShow: 1,
    nextArrow: (
      <CustomNextArrow
        onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
        isDisabled={currentIndex === images.length - 1 ? true : false}
      />
    ),
    prevArrow: (
      <CustomPrevArrow
        onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)}
        isDisabled={currentIndex === 0 ? true : false}
      />
    ),
  };

  return (
    <>
      {/***_ 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Carousel 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 _***/}
      <Box position="relative">
        <Slider {...settings} afterChange={(index) => setCurrentIndex(index)}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt="img"
                style={{
                  width: "97%",
                  height: "500px",
                  objectFit: "fill",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
        </Slider>

        <Flex
          margin="0 auto"
          justifyContent="space-between"
          w="50%"
          alignItems="center"
        >
          <Box
            position="relative"
            height="3px"
            backgroundColor="white"
            width="80%"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              height="3px"
              backgroundColor="ez.blue"
              width={`${Math.max(
                (currentIndex / (images.length - 1)) * 100,
                10
              )}%`}
              transition="width 0.5s ease-in-out"
            ></Box>
          </Box>
          <Box fontSize="16px" fontWeight={500}>
            {currentIndex + 1}/{images.length} Images
          </Box>
        </Flex>
      </Box>

      {/***_ 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Carousel 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 _***/}
    </>
  );
};

export default ImageCenterSlide;
