import React from 'react';
import Product from "./Product";
import './App.css';

class App extends React.Component {

  state = {
    products: [
      {id: '1', name: "Avocado"},
      {id: '2', name: "Apple"}
    ],
    cart: [{id: '1', count: 12}]
  }

  addToCart = (id) => {
    console.log(`add to cart ${id}`)
    this.setState((previousState) => {
      const cart = previousState.cart;
      let productArrayIndex = cart.findIndex(product => product.id === id);
      console.log("index", productArrayIndex)
      if (productArrayIndex !== -1) {
        console.log(`filteredProductInCart before ${cart[productArrayIndex].count}`)
        const left = cart.slice(0, productArrayIndex - 1);
        const right = cart.slice(productArrayIndex + 1, cart.length);
        console.log("left", left)
        console.log("right", right)
        return {
          cart: [...left, {
            id,
            count: cart[productArrayIndex].count++
          }, ...right]
        }
      } else {
        return {cart: [...cart, {id, count: 1}]};
      }
    })
  }

  getProductById = (id) => {
    return this.state.products.filter(product => product.id === id)[0]
  }

  deleteFromCart = (id) => {
    console.log(`deleting ${id}`)
    this.setState((previousState) => {
      const allButProductWithInputId = previousState.cart.filter(product => product.id !== id);
      return {cart: allButProductWithInputId}
    });
  }

  getProductCountInCart = (id) => {
    const productInCart = this.state.cart.filter((product) => product.id === id)[0];
    return productInCart ? productInCart.count : 0
  }

  render() {
    return (
      <div className="app">
        <header>APP</header>
        <div>
          {this.state.products.map((product) => {
            return (
              <Product
                key={product.id}
                name={product.name}
                count={this.getProductCountInCart(product.id)}
                addToCart={() => this.addToCart(product.id)}
              />
            )
          })}
        </div>
        <div>
          Cart:
          {this.state.cart.map((cartItem) => {
            const product = this.getProductById(cartItem.id);
            return (
              <Product
                key={product.id}
                name={product.name}
                count={cartItem.count}
                deleteFromCart={() => this.deleteFromCart(product.id)}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
