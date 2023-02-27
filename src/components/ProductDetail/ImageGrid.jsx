import {
  Box,
  Flex,
  Grid,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Square,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

import { RxCross1 } from "react-icons/rx";

import ImageCenterSlide from "./ImageCenterSlide";

const ImageGrid = ({ images, title, price }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [screenSize, setScreenSize] = useState("");

  const triggerOverlay = () => {
    if (screenSize === "laptop") {
      onOpen();
    }
  };

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

  return (
    <>
      {/***_ 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Image Grid 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 _***/}
      <Flex
        flexDirection="column"
        gap="3px"
        w="100%"
        h={{ base: "250px", md: "420px" }}
        onClick={triggerOverlay}
      >
        <Grid templateColumns={"repeat(2, 1fr)"} gap="3px" h="60%">
          <Square position="relative">
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
            <Image
              src={images[0]}
              position="absolute"
              zIndex={1}
              h="100%"
              borderTopLeftRadius="5px"
            />

            <Image
              src={images[0]}
              position="absolute"
              h="100%"
              w="100%"
              objectFit="cover"
              borderTopLeftRadius="5px"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              backdropFilter="blur(10px)"
              borderTopLeftRadius="5px"
            />
          </Square>

          <Square position="relative">
            <Image
              src={images[1]}
              position="absolute"
              zIndex={1}
              h="100%"
              borderTopRightRadius="5px"
            />

            <Image
              src={images[1]}
              position="absolute"
              h="100%"
              w="100%"
              objectFit="cover"
              borderTopRightRadius="5px"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              backdropFilter="blur(10px)"
              borderTopRightRadius="5px"
            />
          </Square>
        </Grid>
        <Grid templateColumns={"repeat(3, 1fr)"} gap="3px" h="40%">
          <Square position="relative">
            <Image
              src={images[2]}
              position="absolute"
              zIndex={1}
              h="100%"
              borderBottomLeftRadius="5px"
            />

            <Image
              src={images[2]}
              position="absolute"
              h="100%"
              w="100%"
              objectFit="cover"
              borderBottomLeftRadius="5px"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              backdropFilter="blur(10px)"
              borderBottomLeftRadius="5px"
            />
          </Square>

          <Square position="relative">
            <Image src={images[3]} position="absolute" zIndex={1} h="100%" />

            <Image
              src={images[3]}
              position="absolute"
              h="100%"
              w="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              backdropFilter="blur(10px)"
            />
          </Square>

          <Square position="relative">
            <Image
              src={images[4]}
              position="absolute"
              zIndex={1}
              h="100%"
              opacity={0.5}
              borderBottomRightRadius="5px"
            />

            <Image
              src={images[4]}
              position="absolute"
              h="100%"
              w="100%"
              objectFit="cover"
              borderBottomRightRadius="5px"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              backdropFilter="blur(10px)"
              borderBottomRightRadius="5px"
            />
            <Square position="absolute" zIndex={10} color="white">
              <Flex flexDirection="column">
                <Text fontSize="40px" fontWeight="bold">
                  +{images.length - 4}
                </Text>
                <Text fontSize="20px">IMAGES</Text>
              </Flex>
            </Square>
          </Square>
        </Grid>
      </Flex>

      {/***_ 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Image Grid 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 _***/}

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
            <ImageCenterSlide images={images} />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/***_ 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Modal Overlay with centerMode slider 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 _***/}
    </>
  );
};

export default ImageGrid;
