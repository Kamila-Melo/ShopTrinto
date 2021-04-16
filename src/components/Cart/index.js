import React, { useContext } from 'react';
import ButtonClose from '../../images/fecharbotao.svg'
import '../../styles/cart.css';
import {CartContext} from '../../contexts/CartContext';
import Button from '@material-ui/core/Button';

function Cart({onClose = () => { }}){

  const {cart, clearCart, remove, currency} = useContext(CartContext);
  
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
            <span>Valor total: {currency} {totalPrice.toFixed(2)}</span>
          </div>
          <div className='shopping'>
            {cart.map((item, index) => {
              return(
                <div className='shopping-item'>
                  <p>{item.name} - {currency} {item.price.toFixed(2)}</p>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => remove(index)}
                  >
                    Remover
                  </Button>
                </div>
              );
            })}
          </div>
          <div className='clear-cart'>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearCart}
            >
              Limpar carrinho
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;