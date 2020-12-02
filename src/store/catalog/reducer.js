import {initialState} from "./state";
import {CATALOG_FETCH_ERROR, CATALOG_FETCH_REQUEST, CATALOG_FETCH_SUCCESS} from "./types";

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATALOG_FETCH_REQUEST: return {...state, isFetching: true};
    case CATALOG_FETCH_ERROR: return {...state, data: [], error: action.payload}
    case CATALOG_FETCH_SUCCESS: return {...state, isFetching: false, data: action.payload, error: null}
    default: return state;
  }
}