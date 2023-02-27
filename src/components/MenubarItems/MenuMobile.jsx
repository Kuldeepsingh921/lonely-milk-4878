import { HiOutlineChevronDown } from 'react-icons/hi';
import { AiFillCaretRight } from 'react-icons/ai';
import * as items from '../../utils/menu_items';
import {
  Box,
  Flex,
  Text,
  Icon,
  Menu,
  Button,
  Heading,
  MenuList,
  MenuButton,
  useDisclosure
} from '@chakra-ui/react';

const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} gutter={0}>
      <MenuButton
        p='6'
        bg='none'
        as={Button}
        fontSize='xs'
        borderRadius='0'
        fontWeight='normal'
        letterSpacing='wide'
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        transition='0.1s linear'
        textTransform='uppercase'
        _focus={{ boxShadow: 'none' }}
        rightIcon={<HiOutlineChevronDown />}
        _active={{ bg: '#008bcf', color: 'white', fontWeight: 'semibold' }}
      >
        Mobiles
      </MenuButton>
      <MenuList
        rootProps={{ w: '75%', m: 'auto' }}
        transition='0.1s linear'
        onMouseLeave={onClose}
        onMouseEnter={onOpen}
        borderRadius='0'
        boxShadow='md'
        fontSize='sm'
        px='8'
        pt='4'
        pb='8'
      >
        <Flex justifyContent='left' alignItems='flex-start' gap='16'>
          {/* First Box */}
          <Box>
            <Box>
              <Flex
                _hover={{ color: '#008bcf' }}
                justifyContent='left'
                alignItems='center'
                cursor='pointer'
              >
                <Heading size='2xs' lineHeight='8'>
                  Mobile Phones
                </Heading>
                <Icon as={AiFillCaretRight} />
              </Flex>
              <Text
                _hover={{ color: '#008bcf' }}
                lineHeight='taller'
                color='gray.600'
                cursor='pointer'
              >
                Used Mobiles
              </Text>
            </Box>

            <Box mt='4'>
              <Flex justifyContent='left' alignItems='center'>
                <Heading size='2xs' lineHeight='8'>
                  Top Models (Used)
                </Heading>
                <Icon as={AiFillCaretRight} />
              </Flex>
              {items.topModels.map(({ label }, i) => (
                <Text
                  key={i}
                  _hover={{ color: '#008bcf' }}
                  letterSpacing='wide'
                  lineHeight='taller'
                  color='gray.600'
                  cursor='pointer'
                >
                  {label}
                </Text>
              ))}
            </Box>
          </Box>

          {/* Second Box */}
          <Box>
            <Box>
              <Flex justifyContent='left' alignItems='center'>
                <Heading size='2xs' lineHeight='8'>
                  Top Brands (Used/New)
                </Heading>
                <Icon as={AiFillCaretRight} />
              </Flex>
              {items.topBrands.map(({ label }, i) => (
                <Text
                  key={i}
                  _hover={{ color: '#008bcf' }}
                  letterSpacing='wide'
                  lineHeight='taller'
                  color='gray.600'
                  cursor='pointer'
                >
                  {label}
                </Text>
              ))}
            </Box>

            <Box mt='4'>
              <Flex
                _hover={{ color: '#008bcf' }}
                justifyContent='left'
                alignItems='center'
                cursor='pointer'
              >
                <Heading size='2xs' lineHeight='8'>
                  Shop By Choice
                </Heading>
                <Icon as={AiFillCaretRight} />
              </Flex>
              {items.shopByChoice.map(({ label }, i) => (
                <Text
                  key={i}
                  _hover={{ color: '#008bcf' }}
                  letterSpacing='wide'
                  lineHeight='taller'
                  color='gray.600'
                  cursor='pointer'
                >
                  {label}
                </Text>
              ))}
            </Box>
          </Box>

          {/* Third Box */}
          <Box>
            <Box>
              <Flex
                _hover={{ color: '#008bcf' }}
                justifyContent='left'
                alignItems='center'
                cursor='pointer'
              >
                <Heading size='2xs' lineHeight='8'>
                  Tablets
                </Heading>
                <Icon as={AiFillCaretRight} />
              </Flex>
              {items.tablets.map(({ label }, i) => (
                <Text
                  key={i}
                  _hover={{ color: '#008bcf' }}
                  letterSpacing='wide'
                  lineHeight='taller'
                  color='gray.600'
                  cursor='pointer'
                >
                  {label}
                </Text>
              ))}
            </Box>

            <Box mt='4'>
              <Flex
                _hover={{ color: '#008bcf' }}
                justifyContent='left'
                alignItems='center'
                cursor='pointer'
              >
                <Heading size='2xs' lineHeight='8'>
                  Wearable Devices
                </Heading>
                <Icon as={AiFillCaretRight} />
              </Flex>
              {items.wearableDevices.map(({ label }, i) => (
                <Text
                  key={i}
                  _hover={{ color: '#008bcf' }}
                  letterSpacing='wide'
                  lineHeight='taller'
                  color='gray.600'
                  cursor='pointer'
                >
                  {label}
                </Text>
              ))}
            </Box>
          </Box>

          {/* Fourth Box */}
          <Box>
            <Box>
              <Flex
                _hover={{ color: '#008bcf' }}
                justifyContent='left'
                alignItems='center'
                cursor='pointer'
              >
                <Heading size='2xs' lineHeight='8'>
                  Mobile Accessories
                </Heading>
                <Icon as={AiFillCaretRight} />
              </Flex>
              {items.mobileAccessories.map(({ label }, i) => (
                <Text
                  key={i}
                  _hover={{ color: '#008bcf' }}
                  letterSpacing='wide'
                  lineHeight='taller'
                  color='gray.600'
                  cursor='pointer'
                >
                  {label}
                </Text>
              ))}
            </Box>

            <Box mt='4'>
              <Flex
                _hover={{ color: '#008bcf' }}
                justifyContent='left'
                alignItems='center'
                cursor='pointer'
              >
                <Heading size='2xs' lineHeight='8'>
                  Shop By Budget
                </Heading>
                <Icon as={AiFillCaretRight} />
              </Flex>
              {items.shopByBudget.map(({ label }, i) => (
                <Text
                  key={i}
                  _hover={{ color: '#008bcf' }}
                  letterSpacing='wide'
                  lineHeight='taller'
                  color='gray.600'
                  cursor='pointer'
                >
                  {label}
                </Text>
              ))}
            </Box>

            <Flex
              _hover={{ color: '#008bcf' }}
              justifyContent='left'
              alignItems='center'
              cursor='pointer'
              mt='4'
            >
              <Heading size='2xs' lineHeight='8'>
                All Mobiles & Tablets
              </Heading>
              <Icon as={AiFillCaretRight} />
            </Flex>
          </Box>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default MenuMobile;
