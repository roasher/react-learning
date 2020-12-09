import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

export const Logo = () => (
  <div className={styles.logo}>
    <Link to="/" className={styles.link}>
      <img src="/logo192.png" alt="logo" width="100%" />
    </Link>
  </div>
);
