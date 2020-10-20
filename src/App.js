import React from 'react';
import Product from "./Product";
import './App.css';

class App extends React.Component {

  state = {
    products: [
      {id: '1', name: "Avocado", count: 44},
      {id: '2', name: "Apple", count: 44}
    ]
  }

  addToCartHandler = (id) => {
    console.log(`increasing count ${id}`)
    const [product] = this.state.products.filter((item) => item.id === id);
    product.count++
    this.setState(this.state)
  }

  deleteFromCart = (id) => {
    console.log(`deleting ${id}`)
    const filteredProducts = this.state.products.filter((item) => item.id !== id);
    this.setState({ products: filteredProducts });
  }

  render() {
    return (
      <div className="App">
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            count={product.count}
            addToCart={() => this.addToCartHandler(product.id)}
            deleteFromCart={() => this.deleteFromCart(product.id)}
          >
            Вкусный Авокадо
          </Product>
        ))}
      </div>
    );
  }
}

export default App;
