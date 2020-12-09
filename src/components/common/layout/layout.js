import React from 'react';
import styles from './layout.module.scss';
import { Header } from '../header';
import { Footer } from '../footer';
import { PageTitle } from '../page-title';
import { MainContent } from '../main-content';

export const Layout = ({ children, aside, pageTitle }) => (
  <div className={styles.layout}>
    <Header />
    <PageTitle>{pageTitle}</PageTitle>
    <MainContent>
      {aside && <aside>{aside}</aside>}
      <main>{children}</main>
    </MainContent>
    <Footer />
  </div>
);
