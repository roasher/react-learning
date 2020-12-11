import { api } from '../../api';
import { PRODUCTS_LIMIT } from '../../constants';
import { CATALOG_FETCH_ERROR, CATALOG_FETCH_REQUEST, CATALOG_FETCH_SUCCESS } from './action-types';

export const getCatalogAction = categoryName => dispatch => {
  dispatch({
    type: CATALOG_FETCH_REQUEST,
  });

  const url = categoryName ? `/products/category/${categoryName}` : '/products';

  api
    .get(url, { limit: PRODUCTS_LIMIT })
    .then(response => {
      dispatch({
        type: CATALOG_FETCH_SUCCESS,
        payload: response,
      });
    })
    .catch(error => {
      dispatch({
        type: CATALOG_FETCH_ERROR,
        payload: error.message,
      });
    });
};
