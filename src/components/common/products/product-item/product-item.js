import React from "react";
import styles from './product-item.module.scss'

export const ProductItem = ({id, title, image, price, description, toggleCart}) => (
  <div className={styles.productItem}>
    <picture>
      <img
        className={styles.image}
        src={image}
        alt={title}
        itemProp={title}
        loading="lazy"/>
    </picture>
    <div>{price}</div>
    <div>{title}</div>
    <button className={styles.button} onClick={() => toggleCart(id)}>Add</button>
  </div>
)