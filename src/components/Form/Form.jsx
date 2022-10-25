import './Form.css'
import { useState, useContext } from 'react'
import { db } from '../../services/firebaseConfig'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import Loader from '../Loader/Loader'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [cvc, setCvc] = useState('')
    const [validTHRU, setValidTHRU] = useState('')
    const [orderID, setOrderID] = useState('')
    const [loader, setLoader] = useState(false)

    // const handleChange = (e) => {
    //     setName(e.target.value)
    //     setEmail(e.target.value)
    //     // setPassword(e.target.value)
    //     // setConfirmPassword(e.target.value)

    const { cart, deleteAllToCart, totalPrice } = useContext(CartContext)

    

    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoader(true)

        const total = totalPrice() 

        const order = {
            buyer: {name, email, phone},
            items: cart,
            total: total,
            date: serverTimestamp(),
        }

        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
            .then(res => {
                setOrderID(res.id)
                deleteAllToCart();
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => setLoader(false))
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }

    if(loader) {
        <Loader />
    }
    // console.log(orderID)

    if (orderID) {
        return (
            <h1>Gracias por tu compra, tu número de seguimiento es: {orderID}</h1>
        )
    }

    return (
        <form className='mt-5 w-75' onSubmit={handleSubmit} action="">
            <div className='d-flex flex-column'>
                <label>Nombre</label>
                <input onChange={handleChangeName} type="text" value={name} name="nombre" className='form-control' placeholder="John Doe" />
            </div>
            <div className='d-flex flex-column'>
                <label>Email</label>
                <input onChange={handleChangeEmail} type="text" value={email} name="correo" className='form-control' placeholder="john@gmail.com" />
            </div>
            <div className='d-flex flex-column'>
                <label>Telefono</label>
                <input onChange={handleChangePhone} type="text" value={phone} name="telefono" className='form-control' placeholder="3513079987" />
            </div>
            <button className='btn btn-success mt-3'>comprar</button>
        </form>
    )
}

export default Form