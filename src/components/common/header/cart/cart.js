import React from "react"
import styles from "./cart.module.scss"
import {CartContext} from "../../../../context/cart";

class CartView extends React.Component {
  state = {
    isShow: false
  }

  toggleWindow = () => {
    const products = this.context.productsInCart;
    if (products && products.length) {
      this.setState(prevState => ({isShow: !prevState.isShow}))
    }
  }

  render = () => {
    const products = this.context.productsInCart;
    const deleteItemFromCart = this.context.removeFromCart;
    const {isShow} = this.state;
    return (
      <div className={styles.cart}>
        <button onClick={this.toggleWindow}>Cart ({products.length})</button>
        {isShow && products && products.length > 0 && (
          <div className={styles.cartWindow}>
            {products.map(product => (
              <div key={product.id}
                   className={styles.cartItem}>
                <span className={styles.cartItemName}>{product.title}</span>
                <button onClick={() => deleteItemFromCart(product.id)}>x</button>
              </div>
            ))}
          </div>
        )}
        <div>Total price: {products.map(product => product.price).reduce((a, b) => a + b, 0)}</div>
      </div>
    )
  }
}

CartView.contextType = CartContext

export const Cart = CartView;
