import React, {useCallback, useEffect, useState} from "react";
import {Layout} from "../components/common/layout";
import {api} from "../api";
import {PRICE_SYMBOL} from "../constants";

export const ProductDetailPage = ({match}) => {
  const [product, setProduct] = useState(null);
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  const getProduct = () => {
    setFetching(true);

    api.getProduct(match.params.productId)
      .then(response => {
        setProduct(response);
        setFetching(false);
        setError(null);
      })
      .catch(error => {
        console.log("error", error)
        setError(error)
      })
  }
  const getProductSingleLoad = useCallback(getProduct, []);

  useEffect(() => {
    getProductSingleLoad()
    },[getProductSingleLoad]);

  return (
    <Layout>
      {isFetching && !error && 'Loading...'}
      {!error && product &&
      <div>
        <h1>{product.title}</h1>
        <picture>
          <img
            src={product.image}
            alt={product.title}
            itemProp={product.title}
            loading="lazy"/>
        </picture>
        <div>{product.description}</div>
        <div>{`${product.price} ${PRICE_SYMBOL}`}</div>
      </div>}
      {error && 'Error loading products'}
    </Layout>
  )
}