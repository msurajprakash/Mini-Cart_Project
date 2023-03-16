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
    
    const docRef = this.db.collection('products').doc(products[index].id)

    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('Updated Successfully')
      })
      .catch((error) => {
        console.log('Error :', error)
      })
  }

  handleDecreaceQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    const docRef = this.db.collection('products').doc(products[index].id)

    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log('Updated Successfully')
      })
      .catch((error) => {
        console.log('Error :', error)
      })
    
  }

  onDeleteQuantity = (id) => {
    const {products} = this.state;
    
    const docRef = this.db.collection('products').doc(id);
    console.log(products)

    docRef
      .delete()
      .then(() => {
        console.log('Deleted Successfully')
      })
      .catch((error) => {
        console.log('Error :', error)
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

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        name: '',
        price: '',
        qty: 0,
        img: ''
      })
      .then((docRef) => {
        console.log('The product has been added', docRef);
      })
      .catch((error) => {
        console.log('Error :', error)
      })
  }

  render() {
    const {products, loading} = this.state;
    return (
      <div>
        <Navbar cartCount={this.getCartCount} />
        <button onClick={this.addProduct} style={{position: 'absolute', top: 50, fontSize: 20, padding: 10}}>Add a product</button>
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
