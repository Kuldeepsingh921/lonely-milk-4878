import axios from 'axios';

import {
  GET_AUTH_LOADING,
  GET_AUTH_SUCCESS,
  GET_AUTH_ERROR,
  ADD_AUTH_ERROR,
  ADD_AUTH_LOADING,
  ADD_AUTH_SUCCESS,
  RESET_AUTH
} from './auth.types';

export const getUsers = (email) => async (dispatch) => {
  dispatch({ type: GET_AUTH_LOADING });
  try {
    const responce = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/users`
    );
    const payload = checkUser(email, responce.data);
    if (payload) {
      dispatch({ type: GET_AUTH_SUCCESS, payload: payload });
    }
  } catch (err) {
    dispatch({ type: GET_AUTH_ERROR });
  }
};

export const existingUser = async (email) => {
  const responce = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/users`
  );
  const payload = checkUser(email, responce.data);
  if (!payload) return false;
  return true;
};

export const addUsers = (newUser) => async (dispatch) => {
  dispatch({ type: ADD_AUTH_LOADING });
  try {
    const responce = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/users`,
      newUser
    );
    const payload = { status: true, userData: responce.data };
    dispatch({ type: ADD_AUTH_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({ type: ADD_AUTH_ERROR });
  }
};

export const adminLogin = async (adminCred) => {
  const responce = await axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/admin/1`
  );

  if (JSON.stringify(responce.data) === JSON.stringify(adminCred)) {
    localStorage.setItem('admin', adminCred.password);
    return true;
  }
  return false;
};

export const logout = () => async (dispatch) => {
  dispatch({ type: RESET_AUTH });
};

const checkUser = (email, data) => {
  if (data.length === 0) return false;

  for (let i = 0; i < data.length; i++) {
    if (data[i].email === email) {
      return { status: true, userData: data[i] };
    }
  }
  return false;
};
