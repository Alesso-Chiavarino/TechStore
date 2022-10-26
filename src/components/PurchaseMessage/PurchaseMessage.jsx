import './PurchaseMessage.scss'
import { Link } from 'react-router-dom'

const PurchaseMessage = ({ name, email, phone, total, cardNumber }) => {
    return (
        <div className='contPurchaseMessage'>
            <div className="purchaseCompleted col-md-12">
                <h3>¡Gracias <span className="text-danger">{name}</span> por elegirnos!</h3>
                <p>¡El pago fue realizado con éxito!</p>
                <p>Corroborá las instrucciones de retiro en tu correo: <span className="text-danger">{email}</span></p>
                <p>Mandamos un codigo de seguimiendo al numero: <span className="text-danger">{phone}</span></p>
                <p>Pagaste ${total}</p>
                <p>Con la tarjeta número: **** - **** - **** - {cardNumber.slice(12, 16)}</p>
                <Link to={'/category'} ><button className='btn btn-danger'>Ver más productos</button></Link>
            </div>
        </div>
    )
}

export default PurchaseMessage