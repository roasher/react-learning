import React from "react";

class CartItem extends React.Component {

  componentWillUnmount() {
    console.log('cart item will unmount')
  }

  render() {
    const {productId, label, deleteProduct} = this.props;
    return (
      <div>
        <span>{label}</span>
        <button onClick={() => deleteProduct(productId)}>Delete</button>
      </div>
    )
  }
}

export default CartItem