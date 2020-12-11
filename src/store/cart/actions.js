import { ADD_TO_CART, REMOVE_FROM_CART } from './action-types';

export const addToCartAction = product => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};

export const removeFromCartAction = id => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
};
