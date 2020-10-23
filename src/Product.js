import React from "react";
import styles from "./Product.module.scss"

const Product = ({name, count, addToCart, deleteFromCart, inCart}) => {
  console.log(styles)
  return (
    <div className={inCart ? styles.product__inCart : styles.product}>
      <div>{name}</div>
      <div>{count}</div>
      {addToCart && <button onClick={addToCart}>buy</button>}
      {deleteFromCart && <button onClick={deleteFromCart}>delete</button>}
    </div>
  )
}

export default Product;