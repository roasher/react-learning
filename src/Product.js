import React from "react";

const Product = ({name, count, children, data = true, addToCart, deleteFromCart}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{count}</div>
      <div>{children}</div>
      {data && <div>data</div>}
      <button onClick={addToCart}>buy</button>
      <button onClick={deleteFromCart}>delete</button>
    </div>
  )
}

export default Product;