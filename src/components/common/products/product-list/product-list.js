import React from "react";
import {ProductItem} from "../product-item";
import styles from "./product-list.module.scss"
import {withRouter} from "react-router";

const ProductListView = ({products = [], productsInCart, toggleCart, history}) => (
  <div className={styles.productList}>
    <button onClick={() => history.push("/catalog/2")}>To Item</button>
    {products.map(product => {
      return (
        <ProductItem
          key={product.id}
          toggleCart={toggleCart}
          inCart={productsInCart.find(item => item.id === product.id)}
          {...product}
        />
      )
    })}
  </div>
)

export const ProductList = withRouter(ProductListView);