import { HiOutlineChevronDown } from 'react-icons/hi';
import { AiFillCaretRight } from 'react-icons/ai';
import * as items from '../utils/menu_items';
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
import MenuMobile from './MenubarItems/MenuMobile';
import MenuDecor from './MenubarItems/MenuDecor';

const Menubar = () => {
  return (
    <Box w='100%' borderBottom='1px solid' borderBottomColor='gray.200'>
      <Flex w='75%' m='auto'>
        <MenuMobile />
        <MenuDecor />
      </Flex>
    </Box>
  );
};

export default Menubar;
