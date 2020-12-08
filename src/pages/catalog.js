import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Layout} from "../components/common/layout";
import {ProductList} from "../components/common/products";
import {ProductFilters} from "../components/common/products/product-filters";
import {useDispatch, useSelector} from "react-redux";
import {getCatalogAction} from "../store/catalog/actions";
import {getCatalogData, getCatalogError, getCatalogIsFetching} from "../store/catalog/selectors";
import {addToCartAction, getCartSelector, removeFromCartAction} from "../store/cart";

const heavyOperation = (val) => {
  let i = 0;
  while (i < 100000) {
    i++
  }
  console.log("create data")
  return val * 2;
}

export const CatalogPage = () => {
  const catalog = useSelector(getCatalogData);
  const catalogIsFetching= useSelector(getCatalogIsFetching);
  const catalogError= useSelector(getCatalogError);
  const cartData= useSelector(getCartSelector);

  const dispatch = useDispatch();
  const getCatalog= useCallback((categoryName) => dispatch(getCatalogAction(categoryName)), [dispatch]);
  const addToCart= useCallback((product) => dispatch(addToCartAction(product)), [dispatch]);
  const removeFromCart = useCallback((id) => dispatch(removeFromCartAction(id)), [dispatch]);

  const [categories, ] = useState(["men clothing", "electronics", "jewelery", "women clothing"]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    getCatalog();
  }, [getCatalog])

  const data = useMemo(() => heavyOperation(filter.length), [filter]);

  const getProductById = (id) => {
    return catalog.find(product => product.id === id);
  }

  const toggleCart = (id) => {
    const productsInCart = cartData;
    console.log(productsInCart)
    if (productsInCart.find(product => product.id === id)) {
      removeFromCart(id);
    } else {
      addToCart(getProductById(id))
    }
  }

  const changeFilter = (event) => {
    const value = event.target.value;
    setFilter(event.target.value);
    getCatalog(value === "all" ? null : value);
  }

  return (
    <Layout aside={<ProductFilters data={categories}
                                   filter={filter}
                                   onChange={changeFilter}/>}
            pageTitle='Catalog page'>
      <div>{data}</div>
      {catalogIsFetching && !catalogError && 'Loading...'}
      {!catalogIsFetching && !catalogError &&
      <ProductList products={catalog}
                   productsInCart={cartData}
                   toggleCart={toggleCart}
      />}
      {catalogError && 'Error loading products'}
    </Layout>
  );
}
