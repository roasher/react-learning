import React from 'react';
import Product from "./Product";
import './App.css';
import {cloneDeep} from "lodash"

class App extends React.Component {

  state = {
    products: [
      {id: '1', name: "Avocado"},
      {id: '2', name: "Apple"}
    ],
    cart: [{id: '1', count: 12}]
  }

  addToCart = (id) => {
    console.log(`add to cart productId: ${id}`)
    this.setState((previousState) => {
      const cart = cloneDeep(previousState.cart);
      const productArrayIndex = cart.findIndex(product => product.id === id);
      if (productArrayIndex === -1) {
        // new product
        cart.push({id, count: 1})
      } else {
        // product already exist
        cart[productArrayIndex].count++;
      }
      return {cart}
    })
  }

  getProductById = (id) => {
    return this.state.products.filter(product => product.id === id)[0]
  }

  deleteFromCart = (id) => {
    console.log(`deleting productId: ${id}`)
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
        <header>
          <h1>Products List</h1>
        </header>
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
              <div key={product.id}>
                <span>
                  {product.name + ":" + this.getProductCountInCart(product.id)}
                </span>
                <button onClick={() => this.deleteFromCart(product.id)}>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
