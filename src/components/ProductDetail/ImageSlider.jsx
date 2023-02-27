import React, { useEffect, useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

import { RxCross1 } from "react-icons/rx";
import {
  Box,
  Circle,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Text,
  Square,
  Flex,
  Grid,
} from "@chakra-ui/react";

import ImageCenterSlide from "./ImageCenterSlide";

const ImageSlider = ({ images, title, price }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 480) {
        setScreenSize("mobile");
      } else if (width < 992) {
        setScreenSize("pad");
      } else if (width >= 1280) {
        setScreenSize("laptop");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const triggerOverlay = () => {
    if (screenSize === "laptop") {
      onOpen();
    }
  };

  return (
    <>
      {/***_ 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Carousel 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 _***/}
      <Box position="relative">
        <Box
          position="absolute"
          zIndex={10}
          top={0}
          left={0}
          bgColor="ez.green"
          color="white"
          fontSize="14px"
          padding="3px 15px"
          borderBottomRightRadius="10px"
          borderTopLeftRadius="5px"
        >
          PREFERRED SELLER
        </Box>
        <Box
          position="absolute"
          zIndex={10}
          bottom={1.5}
          right={0}
          bgColor="ez.green"
          color="white"
          fontSize="16px"
          fontWeight={400}
          padding="3px 15px"
          borderBottomRightRadius="5px"
          borderTopLeftRadius="20px"
        >
          {images.length} IMAGES
        </Box>
        <Slider {...settings} afterChange={(index) => setCurrentIndex(index)}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                onClick={triggerOverlay}
                src={image}
                alt="img"
                style={{
                  width: "100%",
                  height:
                    screenSize === "laptop"
                      ? "420px"
                      : screenSize === "mobile"
                      ? "200px"
                      : "300px",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Slider>
      </Box>

      {/***_ 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Carousel 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 _***/}

      {/***_ 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Modal Overlay with centerMode slider 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 _***/}

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        position="relative"
      >
        <ModalOverlay bg="rgba(0, 0, 0, 0.9)" zIndex={100} />

        <ModalContent bgColor="transparent" shadow="none" color="white">
          <Flex
            justifyContent="space-between"
            w="100%"
            px="50px"
            position="absolute"
            top={10}
          >
            <Flex justifyContent="space-between" gap="50px">
              <Square as="button" onClick={onClose}>
                <RxCross1 size="30px" />
              </Square>

              <Box fontWeight={500}>
                <Text fontSize="16px">{title}</Text>
                <Text fontSize="20px">₹ {price}</Text>
              </Box>
            </Flex>

            <Grid templateColumns="repeat(2,1fr)" gap="20px" w="30%">
              <Box
                as="button"
                bgGradient="linear(204deg, rgba(0,128,179,1) 37%, rgba(255,227,21,1) 100%)"
                color="white"
                fontSize="16px"
                fontWeight={700}
                padding="15px 0px"
                textAlign="center"
                borderRadius="5px"
              >
                ADD TO CART
              </Box>
              <Box
                as="button"
                color="ez.blue"
                border="1px solid"
                borderColor="ez.blue"
                fontSize="16px"
                fontWeight={700}
                padding="15px 0px"
                textAlign="center"
                borderRadius="5px"
              >
                CHAT
              </Box>
            </Grid>
          </Flex>

          <ModalBody
            position="absolute"
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            w="100%"
            marginTop={"30px"}
          >
            <ImageCenterSlide images={images} title={title} price={price} />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/***_ 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Modal Overlay with centerMode slider 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 _***/}
    </>
  );
};

export default ImageSlider;
