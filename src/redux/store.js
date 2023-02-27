import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './cart/cart.reducer';
import { productDetailReducer } from './product-details/productDetail.reducer';
import { productReducer } from './products/products.reducer';

const rootReducer = combineReducers({
  productDetail: productDetailReducer,
  products: productReducer,
  cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
