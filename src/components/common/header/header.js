import React from 'react';
import styles from './header.module.scss';
import { Wrapper } from '../../ui';
import { Cart } from './cart';
import { Navigation } from './navigation';
import { Logo } from './logo';
import { useInput } from '../../../hooks';

export const Header = () => {
  const input = useInput('');
  return (
    <header className={styles.header}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.leftSide}>
          <Logo />
          <Navigation />
        </div>
        <div>
          <input type="text" placeholder="search" {...input} />
        </div>
        <div>
          <Cart />
        </div>
      </Wrapper>
    </header>
  );
};
