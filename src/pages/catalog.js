import React from 'react';
import {Layout} from "../components/common/layout";
import {ProductList} from "../components/common/products";
import {CartContext} from "../context";
import {ProductFilters} from "../components/common/products/product-filters";
import {connect} from "react-redux";
import {getCatalogAction} from "../store/catalog/actions";
import {getCatalogData, getCatalogError, getCatalogIsFetching} from "../store/catalog/selectors";

class CatalogPageView extends React.Component {

  state = {
    // map product id: count
    cart: [],
    categories: [],
    filter: "all"
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
    return this.props.catalog.find(product => product.id === id);
  }

  getProductsInCart = () => {
    return this.state.cart;
  }

  getCategories = () => {
    this.setState({categories: ["men clothing", "electronics", "jewelery", "women clothing"]});
  }

  changeFilter = (event) => {
    const value = event.target.value;
    this.setState({filter: value})
    this.props.getCatalog(value === "all" ? null : value);
  }

  componentDidMount() {
    this.props.getCatalog();
    this.getCategories();
  }

  render() {
    const {catalog, catalogIsFetching, catalogError} = this.props;
    return (
      <CartContext.Provider value={{productsInCart: this.getProductsInCart(), removeFromCart: this.toggleCart}}>
        <Layout aside={<ProductFilters data={this.state.categories}
                                       filter={this.state.filter}
                                       onChange={this.changeFilter}/>}
                pageTitle='Catalog page'>
          {catalogIsFetching && !catalogError && 'Loading...'}
          {!catalogIsFetching && !catalogError &&
          <ProductList products={catalog}
                       toggleCart={this.toggleCart}
          />}
          {catalogError && 'Error loading products'}
        </Layout>
      </CartContext.Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  catalogIsFetching: getCatalogIsFetching(state),
  catalog: getCatalogData(state),
  catalogError: getCatalogError(state)
});

const mapDispatchToProps = (dispath) => ({
  getCatalog: (categoryName) => dispath(getCatalogAction(categoryName))
})

export const CatalogPage = connect(mapStateToProps, mapDispatchToProps)(CatalogPageView);
