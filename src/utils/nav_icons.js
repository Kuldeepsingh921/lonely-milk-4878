import {
  AiOutlineHome,
  AiOutlineMobile,
  AiOutlineDollarCircle
} from 'react-icons/ai';
import {
  IoPersonOutline,
  IoBriefcase,
  IoCarSportOutline
} from 'react-icons/io5';
import { TiSpanner } from 'react-icons/ti';
import { BsDownload } from 'react-icons/bs';
import { FaMotorcycle } from 'react-icons/fa';
import { MdPayment, MdOutlineLocalOffer } from 'react-icons/md';
import { RiAccountCircleLine, RiTeamLine } from 'react-icons/ri';
import { GiSofa, GiWashingMachine, GiKidSlide } from 'react-icons/gi';
import { Flex, Icon, Text } from '@chakra-ui/react';

export const generalDrawerItems = [
  { label: 'My Account', icon: IoPersonOutline },
  { label: 'Order & Payments', icon: MdPayment }
];

export const drawerCategories = [
  { label: 'Services', icon: TiSpanner },
  { label: 'Jobs', icon: IoBriefcase },
  { label: 'Cars', icon: IoCarSportOutline },
  { label: 'Bikes', icon: FaMotorcycle },
  { label: 'Furniture & Decor', icon: GiSofa },
  { label: 'Electronics & Appliances', icon: GiWashingMachine },
  { label: 'Homes', icon: AiOutlineHome },
  { label: 'Co-working Spaces', icon: RiTeamLine },
  { label: 'Mobiles & Tablets', icon: AiOutlineMobile },
  { label: 'Kids & Toys', icon: GiKidSlide }
];

export const otherDrawerOptions = [
  { label: 'For Businesses', icon: AiOutlineDollarCircle },
  { label: 'Deals & Offers', icon: MdOutlineLocalOffer },
  { label: 'Download Apps', icon: BsDownload }
];
