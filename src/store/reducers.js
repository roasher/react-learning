import { combineReducers } from 'redux';
import { catalogReducer } from './catalog';
import { cartReducer } from './cart/reducer';

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
});
