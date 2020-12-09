import React from 'react';
import { Link } from 'react-router-dom';
import styles from './product-item.module.scss';
import { PRICE_SYMBOL } from '../../../../constants';

export const ProductItem = ({ id, title, image, price, toggleCart, inCart }) => (
  <div className={styles.productItem}>
    <picture>
      <img className={styles.image} src={image} alt={title} itemProp={title} loading="lazy" />
    </picture>
    <Link to={`/catalog/${id}`}>{title}</Link>
    <div>{`${price} ${PRICE_SYMBOL}`}</div>
    {toggleCart && (
      <button className={styles.button} onClick={() => toggleCart(id)} type="button">
        {!inCart ? 'Add' : 'Remove'}
      </button>
    )}
  </div>
);
