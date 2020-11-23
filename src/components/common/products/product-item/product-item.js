import React from "react";
import styles from './product-item.module.scss'

export const ProductItem = ({product}) => (
  <div className={styles.productItem}>{product.title}</div>
)