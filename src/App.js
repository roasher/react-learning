import React from 'react';
import {ErrorBoundary} from "./components/ErrorBoundary";
import withWindowSize from "./hoc/withWindowSize";
import {Layout} from "./components/common/layout";
import {api} from "./api";
import {ProductList} from "./components/common/products";
import {CartContext} from "./context/cart";
import {ProductFilters} from "./components/common/products/product-filters";


class App extends React.Component {

  state = {
    products: {
      data: [],
      isFetched: false,
      error: null
    },
    // map product id: count
    cart: [],
    categories: [],
    filter: "all"
  }

  getProducts = (categoryName) => {
    this.setState(prevState => ({
      products: {...prevState.products, isFetched: true}
    }));

    const url = categoryName ? `/products/category/${categoryName}` : '/products';

    api.get(url, {limit: 15})
      .then(response => {
        this.setState(prevState => ({
          products: {...prevState.products, data: response, isFetched: false, error: null},
        }))
        console.log(this.state);
      })
      .catch(error => {
        console.log("error", error)
        this.setState({products: {error: error}})
      })
  }

  toggleCart = (id) => {
    const newCart = this.state.cart.filter(product => product.id !== id);
    if (newCart.length === this.state.cart.length) {
      // product is not present in cart
      newCart.push(this.getProductById(id))
    }
    this.setState({cart: newCart});
  }

  getProductById = (id) => {
    return this.state.products.data.find(product => product.id === id);
  }

  getProductsInCart = () => {
    return this.state.cart;
  }

  getCategories = () => {
    this.setState({categories : ["men clothing", "electronics", "jewelery", "women clothing"]});
  }

  changeFilter = (event) => {
    const value = event.target.value;
    this.setState({filter: value})
    this.getProducts(value === "all" ? null : value);
  }

  componentDidMount() {
    this.getProducts();
    this.getCategories();
  }

  render() {
    const {products} = this.state;
    return (
      <ErrorBoundary>
        <CartContext.Provider value={{productsInCart: this.getProductsInCart(), removeFromCart: this.toggleCart}}>
          <Layout aside={<ProductFilters data={this.state.categories} filter={this.state.filter} onChange={this.changeFilter} />}>
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
