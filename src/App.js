import React from 'react';
import Navbar from './Navbar'
import Cart from './Cart'
import Hero from './Hero'
import Footer from './Footer'
import firebase from 'firebase/compat/app';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore()
  }

  componentDidMount (){
    this.db
      .collection('products')
      .onSnapshot((snapshot) => {

        snapshot.docs.map((doc) =>{
          return doc.data();
        })

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;
          return data;
        })

        this.setState({
          products,
          loading: false
        })
        
      })

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
    const {products, loading} = this.state;
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
        {loading && <h2>Loading page ...</h2>}
        <Footer 
          totalAmount={this.getTotalAmount}
        />
      </div>
    )
  }
}

export default App;
