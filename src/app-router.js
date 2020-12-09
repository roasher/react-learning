import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CatalogPage } from './pages/catalog';
import { MainPage } from './pages/main';
import { ProductDetailPage } from './pages/product-detail-page';

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/catalog" component={CatalogPage} exact />
      <Route path="/" component={MainPage} exact />
      <Route path="/catalog/:productId" exact component={ProductDetailPage} />
    </Switch>
  </BrowserRouter>
);
