import React from 'react';
import {ErrorBoundary} from "./components/ErrorBoundary";
import withWindowSize from "./hoc/withWindowSize";
import {Layout} from "./components/common/layout";
import {api} from "./api";
import {ProductList} from "./components/common/products";
import {CartContext} from "./context/cart";
import {cloneDeep} from "lodash/lang";


class App extends React.Component {

  state = {
    products: {
      data: [],
      isFetched: false,
      error: null
    },
    // map product id: count
    cart: new Set()
  }

  getProducts = () => {
    this.setState(prevState => ({
      products: {...prevState.products, isFetched: true}
    }));

    api.get('/products', {limit: 15})
      .then(response => {
        this.setState(prevState => ({
          products: {...prevState.products, data: response, isFetched: false, error: null}
        }))
        console.log(this.state);
      })
      .catch(error => {
        console.log("error", error)
        this.setState({products: {error: error}})
      })
  }

  toggleCart = (id) => {
    const newCart = cloneDeep(this.state.cart);
    const product = Array.from(this.state.cart).find(item => item === id);
    if (product) {
      newCart.delete(id)
    } else {
      newCart.add(id)
    }
    this.setState({cart: newCart});
  }

  getProductsInCart = () => {
    return this.state.products.data.filter(product => this.state.cart.has(product.id));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const {products} = this.state;
    return (
      <ErrorBoundary>
        <CartContext.Provider value={{productsInCart: this.getProductsInCart(), removeFromCart: this.toggleCart}}>
          <Layout>
            {products.isFetched && !products.error && 'Loading...'}
            {!products.isFetched && !products.error &&
            <ProductList products={products}
                         toggleCart={this.toggleCart}
            />}
            {products.error && 'Error loading products'}
          </Layout>
        </CartContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default withWindowSize(App);
