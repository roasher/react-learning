import React from "react";
import styles from "./product-list.module.scss"
import {ProductItem} from "../product-item";

export const ProductList = ({products = [], toggleCart, cart}) => (
  <div className={styles.productList}>
    {products.data.map(product => {
      return (
        <ProductItem key={product.id} product={product}/>
      )
    })}
  </div>
);
