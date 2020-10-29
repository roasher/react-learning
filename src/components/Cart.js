import React from 'react'
import styles from "../App.module.scss";
import CartItem from "./CartItem";

class Cart extends React.Component {
  render() {
    const {cartItems, getLabelByProductId, deleteFromCartById} = this.props;
    return (
      <div className={styles.cart}>
        {cartItems.map((cartItem) => {
          const id = cartItem.id;
          return (
            <CartItem
              key={id}
              productId={id}
              label={getLabelByProductId(id)}
              deleteProduct={deleteFromCartById}
            />
          )
        })}
      </div>
    )
  }
}

export default Cart;