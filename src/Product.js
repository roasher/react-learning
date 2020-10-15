import React from "react";

const Product = ({name, count, children, data}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{count}</div>
      <div>{children}</div>
      {data && <div>data</div>}
      <button>buy</button>
    </div>
  )
}

export default Product;