import React from 'react';
import { Heading, Box, Text, Image, Grid, Button } from '@chakra-ui/react';
import styles from '../../pages/product/Product.module.css';
import { useNavigate } from 'react-router-dom';

const SingleProductCard = ({ id, title, image, price, description }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.div3}>
      <Box h='auto' w='1000px' bg='white' p='4' borderRadius='10px'>
        <Grid templateColumns='repeat(3, 1fr)' gap={2}>
          <Box w='300px'>
            <Image w='250px' h='200px' src={image} alt={title} />
          </Box>
          <Box w='400px'>
            <Heading marginTop='20px' noOfLines={1}>
              {title}
            </Heading>
            <Text marginTop='20px' noOfLines={2}>
              {description}
            </Text>
          </Box>

          <Box w='300px'>
            <Text marginTop='20px'>
              {' '}
              Starting From ₹{price.toLocaleString('en-US')}{' '}
            </Text>
            <Button
              marginTop={'20px'}
              bg='#008bcf'
              color='white'
              _focus={{ boxShadow: 'outline' }}
              fontWeight='semibold'
              py={2}
              px={4}
              borderWidth='1px'
              borderColor='blue.500'
              rounded='md'
              _hover={{ bg: 'blue.800', color: ' white' }}
              onClick={() => navigate(`/products/${id}`)}
            >
              Product Details
            </Button>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default SingleProductCard;
