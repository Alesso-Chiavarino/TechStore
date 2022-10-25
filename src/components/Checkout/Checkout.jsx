import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Checkout.css'
import Form from '../Form/Form'

const Checkout = () => {

    const { cart } = useContext(CartContext)

    return (
        <>
            <div className='contCheckout d-flex'>
                <div className="checkoutLeftSide w-50">
                    {cart.map(prod => {
                        return (
                            <article className='mt-5 mx-5' key={prod.id}>
                                <img style={{width: '100px'}} src={prod.image} alt={prod.title} />
                                <span>{prod.title}</span>
                                <span>{prod.price}</span>
                            </article>
                        )
                    })}
                </div>
                <div className="checkoutRightSide w-50">
                    <Form/>
                </div>
            </div>
        </>
    )
}

export default Checkout