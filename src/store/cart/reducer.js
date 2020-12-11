import { initialCart } from './state';
import { ADD_TO_CART, REMOVE_FROM_CART } from './action-types';

export const cartReducer = (cart = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      if (cart.find(value => value.id === product.id)) {
        return cart;
      }
      return [...cart, product];
    }
    case REMOVE_FROM_CART: {
      return cart.filter(value => value.id !== action.payload);
    }
    default:
      return cart;
  }
};
