//  import * as types from './products.actionType.js';


//  const initialState = {
//     isLoading: false,
//     isError: false,
//     data: [],
//   };
  
//   export const productReducer = (
//     state = initialState,
//     { type, payload }
//   ) => {
//     switch (type) {
//       case types.GET_PRODUCT_REQUEST: {
//         return {
//           ...state,
//           isLoading: true,
//           isError: false,
//         };
//       }
  
//       case types.GET_PRODUCT_SUCCESS: {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           productDetailData: payload,
//         };
//       }
  
//       case types.GET_PRODUCT_FAILURE: {
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//         };
//       }
  
//       default: {
//         return state;
//       }
//     }
//   };
  


import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
 
} from "./products.actionType";

// ⚠️ Please do not try to tamper with the initial state
const productInitialState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (
  state = productInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case GET_PRODUCT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    // this case is an extra to handle corner cases
    
    default: {
      return state;
    }
  }
};
