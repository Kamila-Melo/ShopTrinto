import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/products.css'

function Products(){

  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState();
  const [select, setSelect] = useState();

  async function getProducts(){
    const response = await axios.get('https://www.trinto.com.br/testes/frontendjr/index.php')
    setProducts(response.data.products)
    setCurrency(response.data.currency)
  }

  let filtered = products.filter(product => product.hasStock === true)

  console.log(filtered)
  console.log(select)

  useEffect(() => {
    getProducts()
  }, [])

  return(
    <div className='products-container'>
      <select className='filter' value={select} onChange={(e) => setSelect(e.target.value)}>
        {/* <option value=""></option> */}
        <option value="allProducts" >Exibir todos os produtos</option>
        <option value="products-stock">Exibir somente produtos com estoque</option>
      </select>
      <div className='filter-value'>
        <input type="radio" name="values" value="allValue"/>
        <p>Todos os valores</p>
        <input type="radio" name="values" value="up-to-fifty"/>
        <p>Até $50.00</p>
        <input type="radio" name="values" value="over-hundred"/>
        <p>A partir de $100</p>
      </div>
      <div className='title'>
        <h1>Nome</h1>
        <h1>Marca</h1>
        <h1>Preço</h1>
        <h1>Em estoque</h1>
        <h1>Ações</h1>
      </div>
      {select === 'allProducts' ? 
        products.map(product => {
          return(
            <div key={product.id} className='products'>
              <p>{product.name}</p>
              <p>{product.brand === null ? '-' : product.brand}</p>
              <p>{currency} {product.price.toFixed(2)}</p>
              <p>{product.hasStock ? 'Sim' : 'Não'}</p>
              <p>Comprar</p>
            </div>
          );
        })
        :
        filtered.map(product => {
          return(
            <div key={product.id} className='products'>
              <p>{product.name}</p>
              <p>{product.brand === null ? '-' : product.brand}</p>
              <p>{currency} {product.price.toFixed(2)}</p>
              <p>{product.hasStock ? 'Sim' : 'Não'}</p>
              <p>Comprar</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default Products;