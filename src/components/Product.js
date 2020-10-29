import React from "react";
import styles from "../Product.module.scss"

class Product extends React.Component {
  render() {
    console.log('redner')
    const {name, count, addToCart, deleteFromCart, inCart} = this.props;
    return (
      <div className={inCart ? styles.product__inCart : styles.product}>
        <div>{name}</div>
        <div>{count}</div>
        {addToCart && <button onClick={addToCart}>buy</button>}
        {deleteFromCart && <button onClick={deleteFromCart}>delete</button>}
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.inCart !== this.props.inCart) {
      console.log('In cart has been updated')
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // heavy thing - rerender should be avoided as much as possible
    console.log('shouldComponentUpdate')
    return true
  }
}

export default Product;