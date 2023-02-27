import React, { useState, useEffect } from 'react';

import { Heading, Box, Flex, Spinner } from '@chakra-ui/react';
import styles from './Product.module.css';
import Pagination from '../../components/Pagination/Pagination';
import Sort from '../../components/FilterAndSort/Sort';
import Filter from '../../components/FilterAndSort/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProducts } from '../../redux/products/products.action';
import SingleProductCard from '../../components/SingleProductCard/SingleProductCard';

const Product = () => {
  const { data, loading, error } = useSelector((store) => store.products);
  const [activePage, setActivePage] = useState(1);
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();

  const filteredProducts =
    data.length &&
    data.filter(
      (item, index) =>
        index >= 5 * activePage - 5 && index <= 5 * activePage - 1
    );

  useEffect(() => {
    if (!data.length || location || !order.length) {
      const getProductsParams = {
        params: {
          category: searchParams.getAll('category'),
          _sort: 'price',
          _order: order,
          page: activePage
        }
      };
      dispatch(getProducts(getProductsParams));
    }
  }, [location.search, order, activePage]);

  if (loading) {
    return (
      <Box textAlign='center' mt='16'>
        <Spinner
          thickness='5px'
          speed='0.8s'
          emptyColor='gray.200'
          color='blue.600'
          size='xl'
        />
      </Box>
    );
  }

  if (error) {
    return (
      <Heading textAlign='center' mt='16'>
        Oops! Something went wrong.
      </Heading>
    );
  }

  return (
    <div className={styles.main}>
      <Sort order={order} setOrder={setOrder} />

      <Flex
        w={{ base: '100%', lg: '70%' }}
        m='auto'
        justifyContent='center'
        alignItems='flex-start'
        gap={6}
      >
        <Filter />
        {/* product section start */}
        <Box>
          {data.length > 0 &&
            filteredProducts.map((item) => (
              <SingleProductCard key={item.id} {...item} />
            ))}
          {/* product section end */}
        </Box>
      </Flex>

      {/* end */}
      <Pagination
        activePage={activePage}
        perPage={5}
        posts={data}
        updatePage={setActivePage}
      />
    </div>
  );
};

export default Product;
