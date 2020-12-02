import React from "react";
import {ProductItem} from "../product-item";
import styles from "./product-list.module.scss"
import {CartContext} from "../../../../context/cart";
import {withRouter} from "react-router";

class ProductListView extends React.Component {
  render() {
    console.log(this.props);
    const {products = [], toggleCart, history} = this.props;
    const {productsInCart} = this.context;
    return (
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
  }
}

ProductListView.contextType = CartContext

export const ProductList = withRouter(ProductListView);