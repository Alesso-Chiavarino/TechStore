import './Cart.css'
import {products} from '../../asyncMock'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const Cart = () => {

  const [prods, setProds] = useState([])

  useEffect(() => {
    setProds(products)
  },[])

  return (
    <section className='cartContainer container my-0 d-flex flex-column'>
      <span className='cartTitle' > <FontAwesomeIcon className='cartIconCart' icon={faCartShopping} /> <h3>Carrito de compras</h3> </span>
      <ul className="d-flex flex-wrap">
        {prods.map((prod) => 
          <>
            <li key={prod.id} className='contProdCart' >
              <div className='contProdLeftCart' > <img className='imgProdCart' src={prod.imagen} alt={prod.nombre} /> </div>
              <div className='contProdCenterCart' > <h3>{prod.nombre}</h3> </div>
              <div className='contProdRightCart' > <span>${prod.precio}</span> </div>
            </li>
            <hr className='w-100 mb-4' />
          </>
          )}
      </ul>
    </section>
  )
}

export default Cart