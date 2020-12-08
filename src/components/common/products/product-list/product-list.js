import React, {useContext} from "react";
import {ProductItem} from "../product-item";
import styles from "./product-list.module.scss"
import {withRouter} from "react-router";
import {TestContext} from "../../../../context/test-context";

const ProductListView = ({products = [], productsInCart, toggleCart, history}) => {
  const context = useContext(TestContext)
  return (
    <div className={styles.productList}>
      <div hidden={true}>{context}</div>
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
}

export const ProductList = withRouter(ProductListView);