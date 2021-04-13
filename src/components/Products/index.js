import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/products.css'

function Products(){

  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState()

  async function getProducts(){
    const response = await axios.get('https://www.trinto.com.br/testes/frontendjr/index.php')
    setProducts(response.data.products)
    setCurrency(response.data.currency)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return(
    <div className='products-container'>
      <div className='title'>
        <h1>Nome</h1>
        <h1>Marca</h1>
        <h1>Preço</h1>
        <h1>Em estoque</h1>
        <h1>Ações</h1>
      </div>
      {products.map(product => {
        return(
          <div key={product.id} className='products'>
            <p>{product.name}</p>
            <p>{product.brand === null ? '-' : product.brand}</p>
            <p>{currency} {product.price}</p>
            <p>{product.hasStock ? 'Sim' : 'Não'}</p>
            <p>Comprar</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;