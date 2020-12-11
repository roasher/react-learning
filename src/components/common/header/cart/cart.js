import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './cart.module.scss';
import { getCartSelector, removeFromCartAction } from '../../../../store/cart';

export const CartView = ({ cartData: products, removeItemFromCart }) => {
  const [isShow, setState] = useState(false);

  const toggleWindow = () => {
    if (products && products.length) {
      setState(!isShow);
    }
  };

  return (
    <div className={styles.cart}>
      <button onClick={toggleWindow} type="button">
        Cart ({products.length})
      </button>
      {isShow && products && products.length > 0 && (
        <div className={styles.cartWindow}>
          {products.map(product => (
            <div key={product.id} className={styles.cartItem}>
              <span className={styles.cartItemName}>{product.title}</span>
              <button onClick={() => removeItemFromCart(product.id)} type="button">
                x
              </button>
            </div>
          ))}
        </div>
      )}
      <div>
        Total price:
        {products.map(product => product.price).reduce((a, b) => a + b, 0)}
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  cartData: getCartSelector(store),
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: id => dispatch(removeFromCartAction(id)),
});

export const Cart = connect(mapStateToProps, mapDispatchToProps)(CartView);
