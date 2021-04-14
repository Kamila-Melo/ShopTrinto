import React, {useState} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../../styles/header.css'
import Cart from '../Cart';

function Header(){

  const [isModalVisible, setIsModalVisible] = useState(false);

  function modalVisible() {
    setIsModalVisible(true);
  }

  return(
    <div className='header-container'>
      <div className='header-title'>
        <h1>ShopTrinto</h1>
      <ShoppingCartIcon
        fontSize='large'
        onClick={modalVisible}
      />
      </div>
      {isModalVisible && (
        <Cart
          onClose={() => setIsModalVisible(false)}
        />
        )
      }
    </div>
  );
}

export default Header;