import * as types from './products.actionType';
import { getProductsAPI } from './products.api';

// Function for getting the products
export const getProducts = (getFilterParams) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_REQUEST });
  try {
    const payload = await getProductsAPI(getFilterParams);
    if (payload) {
      dispatch({ type: types.GET_PRODUCT_SUCCESS, payload });
    }
  } catch (error) {
    dispatch({ type: types.GET_PRODUCT_FAILURE });
  }
};
