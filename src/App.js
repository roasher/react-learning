import React from 'react';
import Product from "./Product";
import './App.css';

function App() {
  return (
    <div className="App">
      <Product name='avocado' count='4'>
        Вкусный авокадо
      </Product>
      <Product name='apple' count='0' data='Это дата, детка'>
        Отвратное яблоко
      </Product>
    </div>
  );
}

export default App;
