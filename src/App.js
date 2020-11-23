import React from 'react';
import {ErrorBoundary} from "./components/ErrorBoundary";
import withWindowSize from "./hoc/withWindowSize";
import {Layout} from "./components/common/layout";
import {api} from "./api";
import {ProductList} from "./components/common/products";


class App extends React.Component {

  state = {
    products: {
      data: [],
      isFetched: false,
      error: null
    }
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

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const {products} = this.state;
    return (
      <ErrorBoundary>
        <Layout>
          {products.isFetched && !products.error && 'Loading...'}
          {!products.isFetched && !products.error && <ProductList products={products}/>}
          {products.error && 'Error loading products'}
        </Layout>
      </ErrorBoundary>
    );
  }
}

export default withWindowSize(App);
