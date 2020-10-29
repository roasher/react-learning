import React from 'react';
import Product from "./components/Product";
import styles from './App.module.scss';
import {cloneDeep} from "lodash"
import Cart from "./components/Cart";
import ErrorBoundary from "./components/ErrorBoundary";
import withWindowSize from "./hoc/withWindowSize";

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
    return this.state.products.find(product => product.id === id)
  }

  deleteFromCartById = (id) => {
    console.log(`deleting productId: ${id}`)
    this.setState((previousState) => {
      const allButProductWithInputId = previousState.cart.filter(product => product.id !== id);
      return {cart: allButProductWithInputId}
    });
  }

  getProductCountInCart = (id) => {
    const productInCart = this.state.cart.find((product) => product.id === id);
    return productInCart ? productInCart.count : 0
  }

  getProductInCart = (id) => {
    return this.state.cart.find((product) => product.id === id)
  }

  getLabelByProductId = (id) => {
    console.log('id:', id)
    const product = this.getProductById(id);
    return product.name + ":" + this.getProductCountInCart(product.id)
  }

  render() {
    return (
      <ErrorBoundary>
        <div className={styles.app}>
          <header className={styles.header}>
            {!this.props.isMobile && <h1>Products List</h1>}
          </header>
          <div>
            {this.state.products.map((product) => {
              return (
                <Product
                  key={product.id}
                  name={product.name}
                  count={this.getProductCountInCart(product.id)}
                  addToCart={() => this.addToCart(product.id)}
                  inCart={this.getProductInCart(product.id)}
                />
              )
            })}
          </div>
          <div>Cart</div>
          <Cart
            cartItems={this.state.cart}
            getLabelByProductId={this.getLabelByProductId}
            deleteFromCartById={this.deleteFromCartById}
          />
        </div>
      </ErrorBoundary>
    );
  }
}

export default withWindowSize(App);
