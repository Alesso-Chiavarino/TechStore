import './Cart.css'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faTrash} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import CartItemCount from '../CartItemCount/CartItemCount';
import { useNavigate, Link } from 'react-router-dom';

const Cart = () => {

  const {cart, deleteToCart, deleteAllToCart, totalPrice} = useContext(CartContext)

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className='contCartEmpty container' >
        <div className=''>
          <h2 className='cartMessage'>El carrito esta vacio!</h2>
          <h2 className='cartMessage2'>Puedes agregar productos desde el botón añadir al carrito en el catálogo.</h2>
          <button className='btn btn-dark' onClick={() => navigate('/')} >Ir al Catálogo</button>
        </div>
        <img className='imgErorCart' src="./img/emptyCart.svg" alt="notFoundIcon"/>
      </div>
    )
  }

  return (
    <section className='cartContainer container my-0 d-flex flex-column'>
      <span className='cartTitle' > <FontAwesomeIcon className='cartIconCart' icon={faCartShopping} /> <h3>Carrito de compras</h3> </span>
      <ul className="d-flex flex-wrap">
        {cart.map((prod) =>
          <article className='w-100' key={prod.id}>
            <li className='contProdCart' >
              <div className='contProdLeftCart' > <img className='imgProdCart' src={prod.image} alt={prod.title} /> </div>
              <div className='contProdCenterCart' > <Link className='text-decoration-none text-dark' to={`/item/${prod.id}`}> <h3>{prod.title}</h3> </Link> </div>
              <div className='contProdCenter2Cart' > <CartItemCount prod={prod} /> <span className='availabilitySpan'>{prod.stock} disponibles</span> </div>
              <div className='contProdCenter3Cart' > <span>${prod.price*prod.quantity}</span> </div>
              <div className='contProdRightCart' > <button className='btnElimarCart' onClick={() => deleteToCart(prod.id)} > <FontAwesomeIcon icon={faTrash} /> </button> </div>
            </li>
            <hr className='w-100 mb-4' />
          </article>
        )}
      </ul>
      <span className='my-3 fw-bold mx-5'>Precio Total: ${totalPrice()}</span>
      <div className='d-flex justify-content-between mb-4'>
        <button className='btn btn-danger w-25 mx-5' onClick={deleteAllToCart} >Eliminar todo</button>
        <Link to={'/checkout'} className='btn btn-success w-25 mx-5'>Comprar</Link>
      </div>
    </section>
  )
}

export default Cart