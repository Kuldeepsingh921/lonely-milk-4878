import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Box,
  Text,
  Flex,
  Input,
  Stack,
  Heading,
  Checkbox,
  Accordion,
  RadioGroup,
  RangeSlider,
  CheckboxGroup,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  RangeSliderThumb,
  RangeSliderTrack,
  RangeSliderFilledTrack
} from '@chakra-ui/react';
import styles from '../../pages/product/Product.module.css';
const API = 'https://mock-server-ge69.onrender.com/api/Products';

const FilterAndSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initialFilterValues = searchParams.getAll('category');
  const [filterValue, setFilterValue] = useState(initialFilterValues || []);

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  useEffect(() => {
    let params = {};
    if (filterValue.length) {
      params.category = filterValue;
    }
    setSearchParams(params);
  }, [filterValue]);

  return (
    <>
      <div>
        <div className={styles.div2}>
          <Heading fontSize={20} py='2' textAlign={'left'}>
            Filter by
          </Heading>
          <Box h={'auto'}>
            <Accordion allowMultiple>
              <AccordionItem py='2'>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: '#008bcf', color: 'white' }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize={16} fontWeight={500}>
                        Brand Name
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup colorScheme='red'>
                    <Stack spacing={1}>
                      <Input placeholder='Search'></Input>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>Realme</Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>Iphone</Checkbox>
                      </Stack>
                      <Stack spacing={5} direction='row'>
                        <Checkbox>Samsung</Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>One Plus</Checkbox>
                      </Stack>
                      <Stack spacing={5} direction='row'>
                        <Checkbox>Google Pixel</Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>Oppo</Checkbox>
                      </Stack>
                      <Stack spacing={5} direction='row'>
                        <Checkbox>Vivo</Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>Motorola</Checkbox>
                      </Stack>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py='2'>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: '#008bcf', color: 'white' }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize={16} fontWeight={500}>
                        Price
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup colorScheme='red'>
                    <Stack spacing={1}>
                      <Flex gap={14}>
                        <Text>₹ 10</Text>
                        <Text marginLeft='20px'> ₹ 10,000</Text>
                      </Flex>
                      <RangeSlider defaultValue={[0, 100000]}>
                        <RangeSliderTrack>
                          <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                      </RangeSlider>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>₹500 & Below</Checkbox>
                      </Stack>
                      <Stack spacing={5} direction='row'>
                        <Checkbox>₹501 -₹1,000</Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>₹1,001 -₹2,000</Checkbox>
                      </Stack>
                      <Stack spacing={5} direction='row'>
                        <Checkbox>₹2,001 -₹5,000</Checkbox>
                      </Stack>
                      <Stack spacing={5} direction='row'>
                        <Checkbox>₹5,001 -₹10,000</Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>Above ₹10,000 </Checkbox>
                      </Stack>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py='2'>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: '#008bcf', color: 'white' }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize={16} fontWeight={500}>
                        Category
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckboxGroup
                    colorScheme='green'
                    value={filterValue}
                    onChange={handleFilterChange}
                  >
                    <Stack spacing={[1, 2]} direction='column'>
                      <Input placeholder='Search' />
                      <Checkbox value='mobile'>Mobiles</Checkbox>
                      <Checkbox value='furniture'>Furnitures</Checkbox>
                      <Checkbox value='electronic'>Electronics</Checkbox>
                      <Checkbox value='home_A'>Home Appliances</Checkbox>
                      <Checkbox value='toy'>Toys</Checkbox>
                      <Checkbox value='sport'>Sports</Checkbox>
                    </Stack>
                  </CheckboxGroup>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py='2'>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: '#008bcf', color: 'white' }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize={16} fontWeight={500}>
                        Rating
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup colorScheme='red'>
                    <Stack spacing={1}>
                      <Stack spacing={5} direction='row'>
                        <Checkbox>★ </Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>★★ </Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>★★★ </Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>★★★★</Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>★★★★★ </Checkbox>
                      </Stack>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py='2'>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: '#008bcf', color: 'white' }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize={16} fontWeight={500}>
                        Product Types
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup colorScheme='red'>
                    <Stack spacing={1}>
                      <Stack spacing={5} direction='row'>
                        <Checkbox>Brand New</Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox>Unboxed</Checkbox>
                      </Stack>
                      <Stack spacing={5} direction='row'>
                        <Checkbox>Used</Checkbox>
                      </Stack>

                      <Stack spacing={5} direction='row'>
                        <Checkbox> Refurbished</Checkbox>
                      </Stack>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem py='2'>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: '#008bcf', color: 'white' }}
                  >
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize={16} fontWeight={500}>
                        Posted By
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup colorScheme='red'>
                    <Stack spacing={1}>
                      <Checkbox>Individual</Checkbox>
                      <Checkbox value='false_cancellable' name='cancellable'>
                        Verified Seller
                      </Checkbox>
                      <Checkbox value='false_cancellable' name='cancellable'>
                        Dealer
                      </Checkbox>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </div>
      </div>
    </>
  );
};

export default FilterAndSort;
