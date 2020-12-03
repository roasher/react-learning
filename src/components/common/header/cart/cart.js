import React from "react"
import styles from "./cart.module.scss"
import {getCartSelector, removeFromCartAction} from "../../../../store/cart";
import {connect} from "react-redux";

class CartView extends React.Component {
  state = {
    isShow: false
  }

  toggleWindow = () => {
    const products = this.props.cartData;
    if (products && products.length) {
      this.setState(prevState => ({isShow: !prevState.isShow}))
    }
  }

  render = () => {
    const products = this.props.cartData;
    const {removeItemFromCart} = this.props;
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
                <button onClick={() => removeItemFromCart(product.id)}>x</button>
              </div>
            ))}
          </div>
        )}
        <div>Total price: {products.map(product => product.price).reduce((a, b) => a + b, 0)}</div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  cartData: getCartSelector(store)
});

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (id) => dispatch(removeFromCartAction(id))
});

export const Cart = connect(mapStateToProps, mapDispatchToProps)(CartView);
