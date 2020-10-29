import React from 'react'
import styles from "./App.module.scss";

class Cart extends React.Component {
  render() {
    const {cartItems, getLabelByProductId, deleteFromCartById} = this.props;
    return (
      <div className={styles.cart}>
        {cartItems.map((cartItem) => {
          const id = cartItem.id;
          return (
            <div key={id}>
                <span>
                  {getLabelByProductId(id)}
                </span>
              <button onClick={() => deleteFromCartById(id)}>Delete</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Cart;