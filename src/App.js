import React from 'react';
import Products from './components/Products'
import Header from './components/Header'
import { CartProvider } from './contexts/CartContext';
import './styles/app.css'

function App(){
  return(
    <CartProvider>
      <div className='container-main'>
        <Header />
        <Products />
      </div>
    </CartProvider>
  );
}

export default App;