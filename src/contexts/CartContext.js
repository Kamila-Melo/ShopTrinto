import React, { useState, useContext, createContext, useEffect } from 'react';

export const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}


const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))


export function CartProvider({children}) {
 
  const [cart, setCart] = useState(() => {return cartFromLocalStorage || []});
  const [totalValue, setTotalValue] = useState();
  const [currency, setCurrency] = useState();

  useEffect(() => {
    let value = 0
    cart.map(item => {
      value = value + item.price
    })

    setTotalValue(value)
  }, [cart])
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  function add(item, curr){
    setCart(prevCart => [...prevCart, item])
    setCurrency(curr)
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
    clearCart,
    currency
  }
 
  return (
   <CartContext.Provider value={store}>
     {children}
   </CartContext.Provider>
 );
}