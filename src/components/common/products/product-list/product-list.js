import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { ProductItem } from '../product-item';
import styles from './product-list.module.scss';
import { TestContext } from '../../../../context/test-context';

const ProductListView = ({ products = [], productsInCart, toggleCart, history }) => {
  const context = useContext(TestContext);
  return (
    <div className={styles.productList}>
      <div hidden>{context}</div>
      <button onClick={() => history.push('/catalog/2')} type="button">
        To Item
      </button>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          toggleCart={toggleCart}
          inCart={productsInCart.find((item) => item.id === product.id)}
          {...product}
        />
      ))}
    </div>
  );
};

export const ProductList = withRouter(ProductListView);
