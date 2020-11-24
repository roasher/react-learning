import React from "react";
import {ProductItem} from "../product-item";
import styles from "./product-list.module.scss"
import {CartContext} from "../../../../context/cart";

class ProductListView extends React.Component {
  render() {
    const {products = [], toggleCart} = this.props;
    const {productsInCart} = this.context;
    return (
      <div className={styles.productList}>
        {products.data.map(product => {
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
}

ProductListView.contextType = CartContext

export const ProductList = ProductListView;