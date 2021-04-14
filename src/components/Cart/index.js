import React, { useContext, useEffect } from 'react';
import ButtonClose from '../../images/fecharbotao.svg'
import '../../styles/cart.css';
import {CartContext} from '../../contexts/CartContext'

function Cart({onClose = () => { }}){

  const {cart, clearCart, remove} = useContext(CartContext);
  
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const handleClose = (e) => {
    if (e.target.id === 'modal') onClose();
  };

  return(
    <div>
      <div id="modal" className="modal" onClick={handleClose}>  
        <div className='container-modal'>
          <div className="close">
            <button
              type="button"
              className="button-close"
              onClick={onClose}
            >
              <img src={ButtonClose} alt="" />
            </button>
          </div>
          <div className='shopping-info'>
            <span>Itens no carrinho: {cart.length}</span>
            <span>Valor total: {totalPrice}</span>
          </div>
          <div>
            {cart.map((item, index) => {
              return(
                <div>
                  <span>{item.name} - {item.price}</span>
                  <button onClick={() => remove(index)}>Remover</button>
                </div>
              );
            })}
          </div>
          <button onClick={clearCart}>Limpar carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;