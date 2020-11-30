import React from "react";
import {Layout} from "../components/common/layout";
import {api} from "../api";
import {PRICE_SYMBOL} from "../constants";

class ProductView extends React.Component {

  state = {
    data: null,
    isFetched: false,
    error: null
  }

  getProduct = () => {
    this.setState({isFetched: true});

    api.getProduct(this.props.match.params.productId)
      .then(response => {
        this.setState(prevState => ({
          ...prevState, data: response, isFetched: false, error: null
        }))
      })
      .catch(error => {
        console.log("error", error)
        this.setState({data: null, error: error})
      })
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const product = this.state.data;
    console.log(product)
    const {isFetched} = this.state;
    const {error} = this.state;
    return (
      <Layout>
        {isFetched && !error && 'Loading...'}
        {!isFetched && !error && product &&
        <div>
          <h1>{product.title}</h1>
          <picture>
            <img
              src={product.image}
              alt={product.title}
              itemProp={product.title}
              loading="lazy"/>
          </picture>
          <div>{product.description}</div>
          <div>{`${product.price} ${PRICE_SYMBOL}`}</div>
        </div>}
        {error && 'Error loading products'}
      </Layout>
    )
  }
}

export const ProductDetailPage = ProductView;