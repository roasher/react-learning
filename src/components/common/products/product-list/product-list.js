import React from "react";
import {ProductItem} from "../product-item";
import styles from "./product-list.module.scss"

export const ProductList = ({products = [], toggleCart, cart}) => (
  <div className={styles.productList}>
    {products.data.map(product => {
      return (
        <ProductItem
          key={product.id}
          toggleCart={toggleCart}
          {...product}
        />
      )
    })}
  </div>
);
