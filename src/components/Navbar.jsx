import {
  Box,
  Flex,
  Icon,
  Text,
  Show,
  Hide,
  Input,
  Image,
  Drawer,
  Select,
  Button,
  Divider,
  DrawerBody,
  InputGroup,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  InputLeftAddon,
  InputRightAddon,
  DrawerCloseButton
} from '@chakra-ui/react';
import {
  drawerCategories,
  otherDrawerOptions,
  generalDrawerItems
} from '../utils/nav_icons';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { SlLocationPin } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { RiAccountCircleLine, RiAdvertisementLine } from 'react-icons/ri';
import { DropDownMenu } from './HomePageComponents/DropDownMenu';
import { AuthContext } from '../context/AuthContext';

const catagoryOptions = [
  { label: 'Mobiles & Tablets', value: 'mobiles' },
  { label: 'Home & Lifystyle', value: 'home_appliances' },
  { label: 'Eletronics & Appliances', value: 'eletronics' },
  { label: 'Furnitures & Decors', value: 'furnitures' },
  { label: 'Kids & Toys', value: 'toys' },
  { label: 'Sports, Hobbies & Fashion', value: 'sports' }
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart } = useSelector((store) => store.cart);
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Box
        top='0'
        bg='white'
        zIndex='1000'
        boxShadow='base'
        position='sticky'
        mt={{ base: '0', lg: '24' }}
        transition='0.4s ease-in-out'
      >
        <Flex
          w={{ base: '100%', lg: '90%' }}
          justifyContent='space-evenly'
          alignItems='center'
          p='1'
          m='auto'
          px={{ base: '6', lg: '1' }}
        >
          <Flex
            alignItems='center'
            justifyContent='spaxe-wetween'
            gap={{ base: '8', lg: '16' }}
          >
            <Flex justifyContent='left' alignItems='center' gap='1'>
              <Icon
                boxSize={{ base: '4', sm: '6', md: '8', lg: '8' }}
                as={HamburgerIcon}
                cursor='pointer'
                onClick={onOpen}
              />
              <Image
                src='https://i.postimg.cc/QCYFtRgy/text-transparent.png'
                w={{ base: '60%', sm: '35%', md: '35%', lg: '180px' }}
                alt='logo'
                cursor='pointer'
                onClick={() => navigate('/')}
              />
            </Flex>

            <Hide below='lg'>
              <Flex
                justifyContent='center'
                alignItems='center'
                m='auto'
                gap='2'
              >
                <Flex justifyContent='center' alignItems='center' gap='1'>
                  <Icon
                    boxSize='4'
                    color='gray.600'
                    alignSelf='center'
                    as={SlLocationPin}
                  />
                  <Text fontSize='sm' minW='max-content' color='gray.600'>
                    All India
                  </Text>
                </Flex>

                <InputGroup
                  size='md'
                  borderRadius='sm'
                  outline='1px solid #008bcf'
                >
                  <InputLeftAddon bg='none' border='none' p='0'>
                    <Select
                      _focus={{ boxShadow: 'none' }}
                      w={{ base: '10%', lg: '32' }}
                      placeholder='All Categories'
                      m='auto'
                      size='xs'
                      border='none'
                      outline='none'
                    >
                      {catagoryOptions.map(({ label, value }, i) => (
                        <option key={i} value={value}>
                          {label}
                        </option>
                      ))}
                    </Select>
                    <Divider h='6' color='gray.400' orientation='vertical' />
                  </InputLeftAddon>
                  <Input
                    _focus={{ boxShadow: 'none' }}
                    w={{ base: '100%', lg: '60' }}
                    m='auto'
                    size='xs'
                    border='none'
                    alignSelf='center'
                    placeholder='Search in All India'
                  />
                  <InputRightAddon
                    bg='#008bcf'
                    border='none'
                    borderRadius='none'
                  >
                    <Icon boxSize='5' color='white' as={SearchIcon} />
                  </InputRightAddon>
                </InputGroup>
              </Flex>
            </Hide>
          </Flex>

          <Flex justifyContent='center' alignItems='center' gap='3'>
            <Flex justifyContent='center' alignItems='center' gap='1'>
              <Box>
                {' '}
                <Icon
                  boxSize={{ base: '4', sm: '5', lg: '7' }}
                  color='gray.600'
                  as={IoCartOutline}
                  cursor='pointer'
                  onClick={() => navigate('/cart')}
                />{' '}
              </Box>
              {cart.length > 0 && (
                <Box mt='-15px' ml='-5px' color='black' fontWeight='bold'>
                  {cart.length}
                </Box>
              )}
              <Text
                fontSize={{ base: 'xs', sm: 'sm' }}
                onClick={() => navigate('/login')}
                color='gray.600'
                cursor='pointer'
              >
                {isAuth ? 'Logout' : 'Login/Register'}
              </Text>
            </Flex>

            <Button
              bg='yellow.300'
              borderRadius='sm'
              border='1px solid'
              borderColor='yellow.500'
              px={{ base: '2', lg: '4' }}
              _hover={{ bg: 'yellow.300' }}
              fontSize={{ base: 'xs', sm: 'sm' }}
            >
              Post Free Ad
            </Button>
          </Flex>
        </Flex>

        <Show below='lg'>
          <InputGroup
            w='95%'
            m='auto'
            my='4'
            size='md'
            borderRadius='sm'
            outline='1px solid #008bcf'
          >
            <InputLeftAddon bg='none' border='none' p='0'>
              <Select
                size='xs'
                border='none'
                outline='none'
                placeholder='All Categories'
                _focus={{ boxShadow: 'none' }}
              >
                {catagoryOptions.map(({ label, value }, i) => (
                  <option key={i} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
              <Divider h='6' color='gray.400' orientation='vertical' />
            </InputLeftAddon>
            <Input
              placeholder='Search in All India'
              _focus={{ boxShadow: 'none' }}
              w={{ base: '100%', lg: '36' }}
              m='auto'
              size='xs'
              border='none'
              alignSelf='center'
            />
            <InputRightAddon borderRadius='none' bg='#008bcf' border='none'>
              <Icon boxSize='5' color='white' as={SearchIcon} />
            </InputRightAddon>
          </InputGroup>
        </Show>

        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton
              bg='none'
              _hover={{
                transform: 'rotateY(0deg) rotate(-90deg)',
                transition: 'transform 0.4s',
                color: '#008bcf'
              }}
              _focus={{ boxShadow: 'none' }}
            />

            <DrawerHeader p='4' borderBottomWidth='1px'>
              <Image
                src='https://i.postimg.cc/0ycwtzCh/combined-transparent.png'
                alt='mini_logo'
                w='50%'
                m='auto'
                ml='0'
                cursor='pointer'
                onClick={() => navigate('/')}
              />
            </DrawerHeader>
            <DrawerBody p='0'>
              <Flex
                pl='4'
                py='2'
                gap='2'
                cursor='pointer'
                alignItems='center'
                justifyContent='left'
                borderLeft='5px solid white'
                transitionTimingFunction='linear'
                onClick={() => navigate('login')}
                transition='background 0.2s, border-left 0.2s'
                _hover={{ bg: 'gray.50', borderLeft: '5px solid #008bcf' }}
              >
                <Icon boxSize='6' as={RiAccountCircleLine} />
                <Text fontSize='sm'>
                  {' '}
                  {isAuth ? 'Logout' : 'Login/Register'}
                </Text>
              </Flex>
              {generalDrawerItems.map(({ label, icon }, i) => (
                <Flex
                  key={i}
                  pl='4'
                  py='2'
                  gap='2'
                  cursor='pointer'
                  alignItems='center'
                  justifyContent='left'
                  borderLeft='5px solid white'
                  transitionTimingFunction='linear'
                  transition='background 0.2s, border-left 0.2s'
                  _hover={{ bg: 'gray.50', borderLeft: '5px solid #008bcf' }}
                >
                  <Icon boxSize='6' as={icon} />
                  <Text fontSize='sm'>{label}</Text>
                </Flex>
              ))}
              <Flex
                pl='4'
                py='2'
                gap='2'
                cursor='pointer'
                alignItems='center'
                justifyContent='left'
                borderBottom='1px solid'
                borderBottomColor='gray.400'
                borderLeft='5px solid white'
                transitionTimingFunction='linear'
                transition='background 0.2s, border-left 0.2s'
                _hover={{ bg: 'gray.50', borderLeft: '5px solid #008bcf' }}
              >
                <Icon boxSize='6' as={RiAdvertisementLine} />
                <Box>
                  <Text fontSize='sm'>My Ads</Text>
                  <Text fontSize='xs' color='gray.400'>
                    Ads posted by you
                  </Text>
                </Box>
              </Flex>

              <Text
                pl='4'
                py='2'
                mt='2'
                color='gray.400'
                textTransform='uppercase'
              >
                Categories
              </Text>
              <Box borderBottom='1px solid' borderBottomColor='gray.400'>
                {drawerCategories.map(({ label, icon }, i) => (
                  <Flex
                    _hover={{ bg: 'gray.50', borderLeft: '5px solid #008bcf' }}
                    transition='background 0.2s, border-left 0.2s'
                    transitionTimingFunction='linear'
                    borderLeft='5px solid white'
                    justifyContent='left'
                    alignItems='center'
                    cursor='pointer'
                    key={i}
                    gap='2'
                    pl='4'
                    py='2'
                  >
                    <Icon boxSize='6' as={icon} />
                    <Text fontSize='sm'>{label}</Text>
                  </Flex>
                ))}
              </Box>

              <Text
                pl='4'
                py='2'
                mt='2'
                color='gray.400'
                textTransform='uppercase'
              >
                Others
              </Text>
              <Box pb='2'>
                {otherDrawerOptions.map(({ label, icon }, i) => (
                  <Flex
                    _hover={{ bg: 'gray.50', borderLeft: '5px solid #008bcf' }}
                    transition='background 0.2s, border-left 0.2s'
                    transitionTimingFunction='linear'
                    borderLeft='5px solid white'
                    justifyContent='left'
                    alignItems='center'
                    cursor='pointer'
                    key={i}
                    gap='2'
                    pl='4'
                    py='2'
                  >
                    <Icon boxSize='6' as={icon} />
                    <Text fontSize='sm'>{label}</Text>
                  </Flex>
                ))}
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Show above='lg'>
        <DropDownMenu />
      </Show>
    </>
  );
};

export default Navbar;
