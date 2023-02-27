import {
  GET_AUTH_LOADING,
  GET_AUTH_SUCCESS,
  GET_AUTH_ERROR,
  ADD_AUTH_ERROR,
  ADD_AUTH_LOADING,
  ADD_AUTH_SUCCESS,
  RESET_AUTH,
} from "./auth.types";

const token = localStorage.getItem("token");

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: token ? true : false,
  isAdmin: false
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_AUTH_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_AUTH_SUCCESS: {
      if (payload.userData) {
        localStorage.setItem("token", "e97c4498-6b3a-4dcb-a2b8-fae0b3011e13");
        localStorage.setItem("ezUserData", JSON.stringify(payload.userData));
      }

      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: payload.status,
      };
    }

    case GET_AUTH_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_AUTH_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ADD_AUTH_SUCCESS: {
      localStorage.setItem("token", "e97c4498-6b3a-4dcb-a2b8-fae0b3011e13");
      localStorage.setItem("ezUserData", JSON.stringify(payload.userData));
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    }

    case ADD_AUTH_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case RESET_AUTH: {
      localStorage.removeItem("token");
      // localStorage.removeItem("ezUserData");
      return {
        ...initialState,
        isAuth: false,
      };
    }

    default: {
      return state;
    }
  }
};
