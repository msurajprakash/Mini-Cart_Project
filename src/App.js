import React from 'react';
import Navbar from './Navbar'
import Cart from './Cart'

class App extends React.Component {

  render() {

    return (
      <div>
        <Navbar />
        <Cart />
      </div>
    )
  }
}

export default App;
