import React, {useEffect, useState} from 'react';
import Products from './components/Products'
import Header from './components/Header'
import { CartProvider } from './contexts/CartContext';

function App(){
  return(
    <CartProvider>
      <div>
        <Header />
        <Products />
      </div>
    </CartProvider>
  );
}

export default App;