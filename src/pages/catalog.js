import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../components/common/layout';
import { ProductList } from '../components/common/products';
import { ProductFilters } from '../components/common/products/product-filters';
import { getCatalogAction } from '../store/catalog/actions';
import { getCatalogData, getCatalogError, getCatalogIsFetching } from '../store/catalog/selectors';
import { addToCartAction, getCartSelector, removeFromCartAction } from '../store/cart';
import { useLogger } from '../hooks';
import { TestContext } from '../context/test-context';

const heavyOperation = (val) => {
  let i = 0;
  while (i < 100000) {
    i += 1;
  }
  return val * 2;
};

export const CatalogPage = () => {
  const catalog = useSelector(getCatalogData);
  const catalogIsFetching = useSelector(getCatalogIsFetching);
  const catalogError = useSelector(getCatalogError);
  const cartData = useSelector(getCartSelector);

  const dispatch = useDispatch();
  const getCatalog = useCallback((categoryName) => dispatch(getCatalogAction(categoryName)), [dispatch]);
  const addToCart = useCallback((product) => dispatch(addToCartAction(product)), [dispatch]);
  const removeFromCart = useCallback((id) => dispatch(removeFromCartAction(id)), [dispatch]);

  const [categories] = useState(['men clothing', 'electronics', 'jewelery', 'women clothing']);
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    getCatalog();
  }, [getCatalog]);

  useLogger(filter);

  const data = useMemo(() => heavyOperation(filter.length), [filter]);

  const getProductById = (id) => catalog.find((product) => product.id === id);

  const toggleCart = (id) => {
    const productsInCart = cartData;
    if (productsInCart.find((product) => product.id === id)) {
      removeFromCart(id);
    } else {
      addToCart(getProductById(id));
    }
  };

  const changeFilter = (event) => {
    const { value } = event.target;
    setFilter(event.target.value);
    getCatalog(value === 'all' ? null : value);
  };

  return (
    <TestContext.Provider value="test value">
      <Layout
        aside={<ProductFilters data={categories} filter={filter} onChange={changeFilter} />}
        pageTitle="Catalog page"
      >
        <div hidden>{data}</div>
        {catalogIsFetching && !catalogError && 'Loading...'}
        {!catalogIsFetching && !catalogError && (
          <ProductList products={catalog} productsInCart={cartData} toggleCart={toggleCart} />
        )}
        {catalogError && 'Error loading products'}
      </Layout>
    </TestContext.Provider>
  );
};
