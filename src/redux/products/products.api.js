import axios from 'axios';

export const getProductsAPI = async (getFilterParams) => {
  const url = `https://zany-tan-chameleon-gown.cyclic.app/`;
  let response = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/products`,
    getFilterParams
  );
  return response.data;
};
