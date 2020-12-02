import {api} from "../../api";
import {PRODUCTS_LIMIT} from "../../constants";
import {CATALOG_FETCH_ERROR, CATALOG_FETCH_REQUEST, CATALOG_FETCH_SUCCESS} from "./types";

export const getCatalogAction = (categoryName) => {
  return (dispatch) => {
    dispatch({
      type: CATALOG_FETCH_REQUEST,
    })

    const url = categoryName ? `/products/category/${categoryName}` : '/products';

    api.get(url, {limit: PRODUCTS_LIMIT})
      .then(response => {
        dispatch(gatCatalogSuccessAction(response))
      })
      .catch(error => {
        dispatch(gatCatalogErrorAction(error))
      })
  }
}

const gatCatalogSuccessAction = (data) => ({
  type: CATALOG_FETCH_SUCCESS,
  payload: data
})

const gatCatalogErrorAction = (error) => ({
  type: CATALOG_FETCH_ERROR,
  payload: error.message
})
