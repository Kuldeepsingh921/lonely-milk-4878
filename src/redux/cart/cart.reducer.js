import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
  ADD_CART_ERROR,
  ADD_CART_LOADING,
  ADD_CART_SUCCESS,
  DELETE_CART_SUCCESS,
} from "./cart.types";

const initState = {
  loading: false,
  error: false,
  cart: [],
};
export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CART_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        loading: true,
        cart: payload,
      };
    }
    case ADD_CART_SUCCESS: {
      return {
        ...state,
        loading: true,
        cart: [...state.cart, payload],
      };
    }
    case ADD_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case DELETE_CART_SUCCESS: {
      const updatedCart=state.cart.filter((el)=>el.id!==payload)
      return {
        ...state,
        loading: true,
        cart: updatedCart,
      };
    }
    default: {
      return state;
    }
  }
};
