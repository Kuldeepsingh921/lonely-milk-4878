import axios from "axios";
import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
  ADD_CART_ERROR,
  ADD_CART_LOADING,
  ADD_CART_SUCCESS,
  DELETE_CART_LOADING,
  DELETE_CART_SUCCESS,
  DELETE_CART_ERROR,
} from "./cart.types";

export const getCartData = () => async (dispatch) => {
  dispatch({ type: GET_CART_LOADING });
  try {
    const responce = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/cart`
    );
    dispatch({ type: GET_CART_SUCCESS, payload: responce.data });
  } catch (err) {
    dispatch({ type: GET_CART_ERROR });
  }
};

export const addToCart = (payload) => async (dispatch) => {
  dispatch({ type: ADD_CART_LOADING });
  try {
    await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/cart`, payload);
    dispatch({ type: ADD_CART_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({ type: ADD_CART_ERROR });
  }
};

export const DeleteCartItem = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CART_LOADING });
  try {
     let res = await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/cart/${id}`);
    dispatch({ type: DELETE_CART_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: DELETE_CART_ERROR });
  }
};
