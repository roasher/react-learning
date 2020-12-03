import React from 'react';
import {Layout} from "../components/common/layout";
import {ProductList} from "../components/common/products";
import {ProductFilters} from "../components/common/products/product-filters";
import {connect} from "react-redux";
import {getCatalogAction} from "../store/catalog/actions";
import {getCatalogData, getCatalogError, getCatalogIsFetching} from "../store/catalog/selectors";
import {addToCartAction, getCartSelector, removeFromCartAction} from "../store/cart";

class CatalogPageView extends React.Component {

  state = {
    categories: [],
    filter: "all"
  }

  toggleCart = (id) => {
    const productsInCart = this.props.cartData;
    console.log(productsInCart)
    if (productsInCart.find(product => product.id === id)) {
      this.props.removeFromCart(id);
    } else {
      this.props.addToCart(this.getProductById(id))
    }
  }

  getProductById = (id) => {
    return this.props.catalog.find(product => product.id === id);
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
      <Layout aside={<ProductFilters data={this.state.categories}
                                     filter={this.state.filter}
                                     onChange={this.changeFilter}/>}
              pageTitle='Catalog page'>
        {catalogIsFetching && !catalogError && 'Loading...'}
        {!catalogIsFetching && !catalogError &&
        <ProductList products={catalog}
                     productsInCart={this.props.cartData}
                     toggleCart={this.toggleCart}
        />}
        {catalogError && 'Error loading products'}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  catalogIsFetching: getCatalogIsFetching(state),
  catalog: getCatalogData(state),
  catalogError: getCatalogError(state),
  cartData: getCartSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getCatalog: (categoryName) => dispatch(getCatalogAction(categoryName)),
  addToCart: (product) => dispatch(addToCartAction(product)),
  removeFromCart: (id) => dispatch(removeFromCartAction(id))
})

export const CatalogPage = connect(mapStateToProps, mapDispatchToProps)(CatalogPageView);
