import React, { useState, useContext, createContext, useEffect } from 'react';

export const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))

export function CartProvider({children}) {
 
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [totalValue, setTotalValue] = useState();

  useEffect(() => {
    let value = 0
    cart.map(item => {
      value = value + item.price
    })

    setTotalValue(value)
  }, [cart])
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function add(item){
    const newCart = cart;
    newCart.push(item);
    
    setCart([...newCart])

    alert('Produto adicionado ao carrinho')
  }

  function remove(index) {
    let newCart = cart.filter((item, i) => i !== index)

    setCart([...newCart])
  }

  function clearCart() {
    setCart([])
  }

  const store = {
    add,
    cart,
    totalValue,
    remove,
    clearCart
  }
 
  return (
   <CartContext.Provider value={store}>
     {children}
   </CartContext.Provider>
 );
}