import './Cart.css'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faTrash} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import CartItemCount from '../CartItemCount/CartItemCount';

const Cart = () => {

  const {cart, deleteToCart, deleteAllToCart} = useContext(CartContext)

  return (
    <section className='cartContainer container my-0 d-flex flex-column'>
      <span className='cartTitle' > <FontAwesomeIcon className='cartIconCart' icon={faCartShopping} /> <h3>Carrito de compras</h3> </span>
      <ul className="d-flex flex-wrap">
        {cart.map((prod) =>
          <article className='w-100' key={prod.id}>
            <li className='contProdCart' >
              <div className='contProdLeftCart' > <img className='imgProdCart' src={prod.imagen} alt={prod.nombre} /> </div>
              <div className='contProdCenterCart' > <h3>{prod.nombre}</h3> </div>
              <div className='contProdCenter2Cart' > <CartItemCount initial={0} quantity={prod.cantidad} stock={prod.stock} /> </div>
              <div className='contProdCenter3Cart' > <span>${prod.precio}</span> </div>
              <div className='contProdRightCart' > <button className='btnElimarCart' onClick={() => deleteToCart(prod.id)} > <FontAwesomeIcon icon={faTrash} /> </button> </div>
            </li>
            <hr className='w-100 mb-4' />
          </article>
        )}
      </ul>
      <div className='d-flex justify-content-between mb-4'>
        <button className='btn btn-danger w-25 mx-5' onClick={deleteAllToCart} >Eliminar todo</button>
        <button className='btn btn-success w-25 mx-5'>Comprar</button>
      </div>
    </section>
  )
}

export default Cart