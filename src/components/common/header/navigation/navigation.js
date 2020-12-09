import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.scss';

export const Navigation = () => (
  <nav>
    <ul className={styles.list}>
      <li>
        <Link to="/catalog">Catalog</Link>
      </li>
    </ul>
  </nav>
);
