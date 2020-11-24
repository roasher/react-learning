import {createContext} from 'react';

export const CartContext = createContext({
  productsInCart: [],
  removeFromCart: (id) => {}
});