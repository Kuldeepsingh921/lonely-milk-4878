import { BuyAndSell } from '../../components/HomePageComponents/BuyAndSell';
import InputElement from '../../components/HomePageComponents/InputElement';
import { BrowseByCategory } from '../../components/HomePageComponents/BrowseByCategory';
import PopularProductsSlider from '../../components/HomePageComponents/PopularProductsSlider';
import { HomeAndLifestyleSlider } from '../../components/HomePageComponents/HomeAndLifestyleSlider';
import { MobileAndTabletsSlider } from '../../components/HomePageComponents/MobileAndTabletsSlider';
import { ElectronicsAndAppliancesSlider } from '../../components/HomePageComponents/ElectronicsAndAppliancesSlider';
import { Box } from '@chakra-ui/react';

const Homepage = () => {
  return (
    <Box textAlign='center'>
      <PopularProductsSlider />
      <BuyAndSell />
      <MobileAndTabletsSlider />
      <HomeAndLifestyleSlider />
      <ElectronicsAndAppliancesSlider />
      <BrowseByCategory />
      <InputElement />
    </Box>
  );
};

export default Homepage;
