import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Box,
  RadioGroup,
  Text,
  Stack,
  Input,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Checkbox,
  Image
} from '@chakra-ui/react';
import styles from '../../pages/product/Product.module.css';
const API = 'https://mock-server-ge69.onrender.com/api/Products';

const FilterAndSort = ({ order, setOrder }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      {/* Sort */}
      <div className={styles.div1}>
        <h1 className={styles.head1}>Sort By:</h1>

        <button className={styles.btn1} onClick={() => setOrder('desc')}>
          <span className={styles.span1}> Price: High to Low </span>
        </button>
        <button className={styles.btn1} onClick={() => setOrder('asc')}>
          <span className={styles.span1}> Price: Low to High </span>
        </button>
        <button className={styles.btnRst} onClick={() => setOrder('')}>
          <span className={styles.span1}> Reset </span>
        </button>
      </div>
      {/* sort end */}
    </>
  );
};

export default FilterAndSort;
