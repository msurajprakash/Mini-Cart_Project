import React from 'react';
import Navbar from './Navbar'
import Cart from './Cart'
import Hero from './Hero'
import Footer from './Footer'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [
        {
          name: 'Camera1',
          price: 50000,
          qty: 0,
          img: 'https://images.unsplash.com/photo-1580707221190-bd94d9087b7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          id: 1
        },
        {
          name: 'Camera2',
          price: 75000,
          qty: 0,
          img: 'https://images.unsplash.com/photo-1625571281451-eb482aa4dd44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          id: 2
        },
        {
          name: 'Camera3',
          price: 62000,
          qty: 0,
          img: 'https://images.unsplash.com/photo-1621985499238-698dfd45b017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          id: 3
        },
        {
          name: 'Camera4',
          price: 105000,
          qty: 0,
          img: 'https://images.unsplash.com/photo-1625571281240-694bfa82e4c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          id: 4
        }
      ]
    }
  }

  handleIncreaceQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products
    })
  }

  handleDecreaceQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products: products
    })
  }

  onDeleteQuantity = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const {products} = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getTotalAmount = () => {

    const {products} = this.state;

    let cart = 0;
    products.forEach((product) => {
      cart = cart + product.qty * product.price;
    })

    return cart;
  }

  render() {
    const {products} = this.state;
    return (
      <div>
        <Navbar 
          cartCount={this.getCartCount}
        />
        <Hero />
        <Cart
          products={products}
          onInscreaseQuantity={this.handleIncreaceQuantity}
          onDecreaseQuantity={this.handleDecreaceQuantity}
          onDeleteProduct={this.onDeleteQuantity}
        />
        <Footer 
          totalAmount={this.getTotalAmount}
        />
      </div>
    )
  }
}

export default App;
