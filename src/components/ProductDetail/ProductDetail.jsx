import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Circle,
  Text,
  Link,
  Divider,
  Button,
  Square,
  Icon,
  Grid,
  Image,
  useToast,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";

import { FcApproval } from "react-icons/fc";

import { FiCheck } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { addToCart, getCartData } from "../../redux/cart/cart.actions";

import { getProductDetail } from "../../redux/product-details/productDetail.actions";

const ProductDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [screenSize, setScreenSize] = useState("");

  const [isExist, setIsExist] = useState(false);

  const toast = useToast();

  const productDetailData = useSelector(
    (store) => store.productDetail.productDetailData
  );

  const cartData = useSelector((store) => store.cart.cart);

  const { id } = useParams();

  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(productDetailData));
    toast({
      title: "Added to cart",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const formatMoney = (amount) => {
    if (amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  const checkifExist = (cartData, id) => {
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id === +id) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    // if (Object.keys(productDetailData).length === 0) {
      id && dispatch(getProductDetail(id));
    // }
  }, []);

  useEffect(() => {
    if (cartData.length === 0) {
      dispatch(getCartData());
    }
  }, [cartData]);

  useEffect(() => {
    setIsExist(checkifExist(cartData, id));
  }, [id, cartData]);

  useEffect(() => {
    
    function handleResize() {
      window.scrollTo(0, 0);
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

  const { title, time, price, location, image, details, category } =
    productDetailData;

  const text = details ? details : "";
  const truncatedText = details && details.slice(0, details.length / 4) + "...";

  return (
    <Box>
      {/*** 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Carousel and title price 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 ***/}

      <Flex
        w={{ base: "100%", sm: "100%", md: "100%", xl: "80%" }}
        margin="auto"
        justifyContent={{ base: "", sm: "", md: "space-between" }}
        gap={{ base: "10px", sm: "10px", md: "50px" }}
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <Box w={{ base: "100%", sm: "100%", md: "60%" }}>
          <Square position="relative" h="420px">
            <Image
              src={image}
              position="absolute"
              zIndex={1}
              h="100%"
              borderTopLeftRadius="5px"
            />

            <Image
              src={image}
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
              backdropFilter="blur(20px)"
              borderTopLeftRadius="5px"
            />
          </Square>

          {/* {screenSize === "laptop" ? (
            <ImageGrid
              images={images}
              title={title}
              price={formatMoney(price)}
            />
          ) : (
            <ImageSlider
              images={images}
              title={title}
              price={formatMoney(price)}
            />
          )} */}
        </Box>

        <Box
          w={{ base: "90%", sm: "90%", md: "38%" }}
          margin={{ base: "auto", sm: "auto", md: "0" }}
        >
          <Flex flexDirection="column" gap="10px">
            <Flex gap="8px" alignItems="center">
              <Text color="ez.green" fontSize="14px" fontWeight={700}>
                BRAND NEW
              </Text>
              <Icon viewBox="0 0 200 200" color="gray">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -50, 0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"
                />
              </Icon>
              <Text
                fontSize="14px"
                fontWeight={700}
                color="gray"
                textTransform="capitalize"
              >
                {category}
              </Text>
              {/* <Icon viewBox="0 0 200 200" color="gray">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -50, 0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"
                />
              </Icon>
              <Text fontSize="14px" fontWeight={700} color="gray">
                SONY
              </Text> */}
            </Flex>

            <Text fontSize="28px" fontWeight={700}>
              {title}
            </Text>

            <Flex alignItems="center" gap="10px">
              <Text>{location}</Text>

              <Divider
                orientation="vertical"
                height="15px"
                borderWidth="1px"
                borderColor="gray"
              />

              <Text>{time}</Text>
            </Flex>

            <Text color="ez.blue" fontSize="28px" fontWeight={700}>
              ₹{formatMoney(price)}
            </Text>

            <Grid templateColumns="repeat(2,1fr)" gap="20px">
              {isExist ? (
                <Box
                  as="button"
                  bgColor="ez.blue"
                  color="white"
                  fontSize="16px"
                  fontWeight={700}
                  padding="15px 0px"
                  textAlign="center"
                  borderRadius="5px"
                  onClick={() =>
                    toast({
                      title: "Item already present",
                      status: "warning",
                      duration: 1000,
                      isClosable: true,
                    })
                  }
                >
                  ADDED TO CART
                </Box>
              ) : (
                <Box
                  as="button"
                  bgGradient="linear(204deg, rgba(0,128,179,1) 37%, rgba(255,227,21,1) 100%)"
                  color="white"
                  fontSize="16px"
                  fontWeight={700}
                  padding="15px 0px"
                  textAlign="center"
                  borderRadius="5px"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </Box>
              )}

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

            <Flex
              bgColor="#f1fbfc"
              alignItems="center"
              justifyContent="space-evenly"
              padding="10px 0px"
              w={{ base: "100%", sm: "100%", md: "85%" }}
            >
              <Square display="flex" flexDirection="column" gap="5px">
                <Image
                  src="https://teja9.kuikr.com/core/clsfd/assets/ic-get-all-details-2x.png"
                  w="40px"
                />
                <Text fontSize="12px" fontWeight={400} color="ez.blue">
                  Get all details
                </Text>
              </Square>

              <Square display="flex" flexDirection="column" gap="5px">
                <Image
                  src="https://teja9.kuikr.com/core/clsfd/assets/ic-schedule-visit-bazaar-2x.png"
                  w="40px"
                />
                <Text fontSize="12px" fontWeight={400} color="ez.blue">
                  Schedule a visit
                </Text>
              </Square>

              <Square display="flex" flexDirection="column" gap="5px">
                <Image
                  src="https://teja9.kuikr.com/core/clsfd/assets/ic-negotiate-2x.png"
                  w="40px"
                />
                <Text fontSize="12px" fontWeight={400} color="ez.blue">
                  Negotiate price
                </Text>
              </Square>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      {/*** 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Carousel and title price 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 ***/}

      {/*** 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Ad Details, Description, Posted By and Buyer Guidelines 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 ***/}

      <Box
        w={{ base: "100%", sm: "100%", md: "100%", xl: "80%" }}
        margin="auto"
        marginTop="40px"
      >
        <Flex
          flexDirection="column"
          gap="20px"
          w={{ base: "100%", sm: "100%", md: "100%", xl: "70%" }}
        >
          {/*** 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Ad Details, Description 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 ***/}

          <Box>
            <Tabs defaultIndex={0} size="lg" variant="unstyled">
              <TabList>
                <Tab
                  fontSize="20px"
                  borderBottom="3.5px solid"
                  borderColor="transparent"
                  fontWeight={400}
                  _selected={{
                    borderBottom: "3.5px solid",
                    borderColor: "ez.blue",
                    fontWeight: "500",
                  }}
                >
                  Add Details
                </Tab>
                <Tab
                  fontSize="20px"
                  borderBottom="3.5px solid"
                  borderColor="transparent"
                  fontWeight={400}
                  _selected={{
                    borderBottom: "3.5px solid",
                    borderColor: "ez.blue",
                    fontWeight: "500",
                  }}
                >
                  Description
                </Tab>
              </TabList>
              <Divider borderColor="gray" />

              <TabPanels>
                <TabPanel>
                  <Text fontSize="24px" fontWeight={700} marginBottom="20px">
                    Add Details
                  </Text>
                  <Flex
                    justifyContent="space-between"
                    flexDirection={{ base: "column", sm: "row", md: "row" }}
                  >
                    <Flex
                      w={{ base: "100%", sm: "40%", md: "40%" }}
                      justifyContent={{
                        base: "space-between",
                        md: "space-between",
                      }}
                    >
                      <Flex
                        flexDirection="column"
                        gap="20px"
                        w={{ base: "40%" }}
                      >
                        <Text>Ad ID</Text>
                        <Text>Condition</Text>
                        <Text>Seller Type</Text>
                      </Flex>

                      <Flex
                        flexDirection="column"
                        gap="20px"
                        w={{ base: "40%" }}
                      >
                        <Text fontWeight="bold">364211573</Text>
                        <Text fontWeight="bold">Brand New</Text>
                        <Text fontWeight="bold">Dealer</Text>
                      </Flex>
                    </Flex>

                    {screenSize !== "mobile" ? (
                      <Divider
                        orientation="vertical"
                        height="120px"
                        borderWidth="1px"
                        borderColor="gray"
                      />
                    ) : (
                      ""
                    )}

                    <Flex
                      w={{ base: "100%", sm: "40%", md: "40%" }}
                      justifyContent={{
                        base: "space-between",
                        md: "space-between",
                      }}
                      marginTop={{ base: "20px", md: "0" }}
                    >
                      <Flex
                        flexDirection="column"
                        gap="20px"
                        w={{ base: "40%" }}
                      >
                        <Text>Brand Name</Text>
                        <Text>Product Type</Text>
                      </Flex>
                      <Flex
                        flexDirection="column"
                        gap="20px"
                        w={{ base: "40%" }}
                      >
                        <Text fontWeight="bold">Sony</Text>
                        <Text fontWeight="bold">TV</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Text fontSize="24px" fontWeight={700} marginBottom="20px">
                    Description
                  </Text>
                  <Box>
                    <div>
                      {text.length > 200
                        ? isExpanded
                          ? text.split("\n").map((line, ind) => {
                              if (ind === text.split("\n").length - 1) {
                                return (
                                  <span key={ind + Date.now()}>{line}</span>
                                );
                              } else {
                                return (
                                  <div key={ind + Date.now()}>
                                    <span>{line}</span>
                                    <br />
                                  </div>
                                );
                              }
                            })
                          : truncatedText.split("\n").map((line, ind) => {
                              if (
                                ind ===
                                truncatedText.split("\n").length - 1
                              ) {
                                return (
                                  <span key={ind + Date.now()}>{line}</span>
                                );
                              } else {
                                return (
                                  <div key={ind + Date.now()}>
                                    <span>{line}</span>
                                    <br />
                                  </div>
                                );
                              }
                            })
                        : text.split("\n").map((line, ind) => {
                            if (ind === text.split("\n").length - 1) {
                              return <span key={ind + Date.now()}>{line}</span>;
                            } else {
                              return (
                                <div key={ind + Date.now()}>
                                  <span>{line}</span>
                                  <br />
                                </div>
                              );
                            }
                          })}{" "}
                      {text.length > 200 ? (
                        <Text
                          as="button"
                          onClick={handleToggle}
                          color="ez.blue"
                        >
                          {isExpanded ? "View Less" : "View More"}
                        </Text>
                      ) : (
                        ""
                      )}
                    </div>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          {/*** 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Ad Details, Description 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 ***/}

          {/*** 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Posted By 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 ***/}

          <Flex
            flexDirection="column"
            gap="20px"
            padding={{ base: "0px 10px" }}
          >
            <Text fontSize="24px" fontWeight="bold">
              Posted By
            </Text>

            <Flex
              alignItems={{ md: "center" }}
              justifyContent={{ md: "space-evenly" }}
              flexDirection={{ base: "column", sm: "column", md: "row" }}
              gap={{ base: "20px", sm: "20px" }}
            >
              <Flex
                alignItems="center"
                gap="20px"
                w={{ base: "60%", sm: "60%" }}
              >
                <Circle
                  size="50px"
                  color="white"
                  bgGradient="linear(to-r, ez.blue, ez.green)"
                >
                  <Text fontSize="25px" fontWeight="600">
                    S
                  </Text>
                </Circle>
                <Box>
                  <Text fontWeight="600">Shiva Enterprises</Text>
                  <Link href="" color="ez.blue">
                    View Profile
                  </Link>
                </Box>
              </Flex>
              {screenSize === "laptop" ? (
                <Divider
                  orientation="vertical"
                  height="30px"
                  borderWidth="1px"
                  borderColor="gray"
                />
              ) : (
                ""
              )}

              <Flex
                alignItems="center"
                justifyContent="space-between"
                gap="10px"
                color="gray"
                w={{ base: "80%", sm: "80%" }}
              >
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  gap="2px"
                >
                  <FcApproval />
                  <Text>Mobile Verified</Text>
                </Flex>

                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  gap="2px"
                >
                  <FcApproval />
                  <Text>Email Verified</Text>
                </Flex>
              </Flex>

              <Button
                color="ez.blue"
                borderColor="ez.blue"
                variant="outline"
                w={{ base: "60%", sm: "60%" }}
              >
                Chat Now
              </Button>
            </Flex>
          </Flex>

          {/*** 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Posted By 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 ***/}

          {/*** 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Guidelines By 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 ***/}

          <Flex
            flexDirection="column"
            gap="20px"
            padding={{ base: "0px 10px" }}
          >
            <Text fontSize="24px" fontWeight="bold">
              Buyer Guidelines
            </Text>

            <Flex
              justifyContent="space-evenly"
              flexDirection="column"
              gap="10px"
              shadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              padding="25px 15px"
              borderRadius="5px"
            >
              <Flex alignItems="center" gap="20px">
                <Square bgColor="#95d4a9" borderRightRadius="50%" size="24px">
                  <FiCheck size="16px" color="white" />
                </Square>
                <Text>Be careful when paying offline</Text>
              </Flex>

              <Flex alignItems="center" gap="20px">
                <Square bgColor="#95d4a9" borderRightRadius="50%" size="24px">
                  <FiCheck size="16px" color="white" />
                </Square>
                <Text>
                  Beware of ads with unrealistic prices, lookalikes or clone
                  products
                </Text>
              </Flex>

              <Flex alignItems="center" gap="20px">
                <Square bgColor="#95d4a9" borderRightRadius="50%" size="24px">
                  <FiCheck size="16px" color="white" />
                </Square>
                <Text>
                  Chat and ask questions to be clear on product details
                </Text>
              </Flex>

              <Flex alignItems="center" gap="20px">
                <Square bgColor="#95d4a9" borderRightRadius="50%" size="24px">
                  <FiCheck size="16px" color="white" />
                </Square>
                <Text>
                  Do not deposit/transfer money to bank or any third party
                  payment gateways without verifying the credentials
                </Text>
              </Flex>
            </Flex>
          </Flex>

          {/*** 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Guidelines By 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 ***/}
        </Flex>
      </Box>

      {/*** 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Ad Details, Description, Posted By and Buyer Guidelines 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 ***/}
    </Box>
  );
};

export default ProductDetail;