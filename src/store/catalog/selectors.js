import {createSelector} from "reselect";

const stateCatalog = state => state.catalog;

export const getCatalogIsFetching = createSelector(
  stateCatalog,
  (state) => state.isFetching
)

export const getCatalogData = createSelector(
  stateCatalog,
  (state) => state.data
)

export const getCatalogError = createSelector(
  stateCatalog,
  (state) => state.error
)