import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../../styles/header.css'

function Header(){
  return(
    <div className='header-container'>
      <div className='header-title'>
        <h1>ShopTrinto</h1>
      <ShoppingCartIcon
        fontSize='large'
      />
      </div>
    </div>
  );
}

export default Header;