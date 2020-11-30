import React from "react";
import {Link} from "react-router-dom";
import styles from './logo.module.scss'

export const Logo = () => (
  <Link to="/">
    <h1 className={styles.logo}>Awesome store</h1>
  </Link>
)