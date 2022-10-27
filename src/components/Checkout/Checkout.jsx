import { useContext, useState, useRef } from 'react'
import { CartContext } from '../../context/CartContext'
import './Checkout.scss'
import { db } from '../../services/firebaseConfig'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Loader from '../Loader/Loader'
import ProductsCheckout from '../ProductsCheckout/ProductsCheckout'
import PurchaseMessage from '../PurchaseMessage/PurchaseMessage'
import {IoAlert} from 'react-icons/io5'
import {RiAlertFill} from 'react-icons/ri'

const Checkout = () => {

    //estados formularios
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardCvc, setCardCvc] = useState('')
    const [cardValidTHRU, setCardValidTHRU] = useState('')
    const [orderID, setOrderID] = useState('')
    const [total, setTotal] = useState(0)
    const [loader, setLoader] = useState(false)

    const { cart, deleteAllToCart, totalPrice } = useContext(CartContext)

    const expresiones = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\d{7,14}$/, // 7 a 14 numeros.
        cardName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        cardNumber: /^\d{16}$/, // si o si 16 numeros
        cardCvc: /^\d{3}$/, // si o si 3 numeros
        cardValid: /^\d{4}$/ // si o si 4 numeros
    }

    //validaciones
    const [nameValidation, setNameValidation] = useState(false)
    const [emailValidation, setEmailValidation] = useState(false)
    const [phoneValidation, setPhoneValidation] = useState(false)
    const [cardNumberValidation, setCardNumberValidation] = useState(false)
    const [cardNameValidation, setCardNameValidation] = useState(false)
    const [cardCvcValidation, setCardCvcValidation] = useState(false)
    const [cardValidTHRUValidation, setCardValidTHRUValidation] = useState(false)

    // const validaciones = {
    //     name: false,
    //     email: false,
    //     phone: false,
    //     cardNumber: false,
    //     cardName: false,
    //     cardCvc: false,
    //     cardValid: false,
    // }

    //referencias
    const nameAlert = useRef()
    const emailAlert = useRef()
    const phoneAlert = useRef()
    const cardNumberAlert = useRef()
    const cardValidAlert = useRef()
    const cardNameAlert = useRef()
    const cardCvcAlert = useRef()
    const wrongFormAlert = useRef()

    const handleSubmit = (e) => {
        if ((nameValidation && emailValidation && phoneValidation && cardNumberValidation && cardNameValidation && cardCvcValidation && cardValidTHRUValidation)) {
            e.preventDefault();
            setLoader(true)
            setTotal(totalPrice())

            const order = {
                buyer: { name, email, phone, cardNumber, cardName, cardCvc, cardValidTHRU },
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
                .finally(() => {
                    setLoader(false)
                })
        } else {
            e.preventDefault()
            wrongFormAlert.current.className = 'bg-danger text-white rounded-1 p-1 d-block'
        }
        
    }
    const handleChangeName = (e) => {
        setName(e.target.value)
        wrongFormAlert.current.className = 'bg-danger text-white rounded-1 p-1 d-none'
        if(expresiones.name.test(name)) {
            setNameValidation(true)
            // validaciones.name = true;
            nameAlert.current.className = 'd-none'
        } else {
            nameAlert.current.className = 'd-flex align-items-center text-danger'
            // validaciones.name = false;
        }
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        wrongFormAlert.current.className = 'bg-danger text-white rounded-1 p-1 d-none'
        if (expresiones.email.test(email)) {
            setEmailValidation(true)
            // validaciones.email = true
            emailAlert.current.className = 'd-none'
        } else {
            emailAlert.current.className = 'd-flex align-items-center text-danger'
            // validaciones.email = false;
        }
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
        wrongFormAlert.current.className = 'bg-danger text-white rounded-1 p-1 d-none'
        if (expresiones.phone.test(phone)) {
            setPhoneValidation(true)
            // validaciones.phone = true
            phoneAlert.current.className = 'd-none'
        } else {
            phoneAlert.current.className = 'd-flex align-items-center text-danger'
            // validaciones.phone = false;
        }
    }

    const handleChangeCardNumber = (e) => {
        setCardNumber(e.target.value)
        wrongFormAlert.current.className = 'bg-danger text-white rounded-1 p-1 d-none'
        if (expresiones.cardNumber.test(cardNumber)) {
            setCardNumberValidation(true)
            // validaciones.cardNumber = true
            cardNumberAlert.current.className = 'd-none'
        } else {
            cardNumberAlert.current.className = 'd-flex align-items-center text-danger'
            // validaciones.cardNumber = false;
        }
    }

    const handleChangeCardName = (e) => {
        setCardName(e.target.value)
        wrongFormAlert.current.className = 'bg-danger text-white rounded-1 p-1 d-none'
        if (expresiones.cardName.test(cardName)) {
            setCardNameValidation(true)
            // validaciones.cardName = true
            cardNameAlert.current.className = 'd-none'
        } else {
            cardNameAlert.current.className = 'd-flex align-items-center text-danger'
            // validaciones.cardName = false;
        }
    }

    const handleChangeCardCvc = (e) => {
        setCardCvc(e.target.value)
        wrongFormAlert.current.className = 'bg-danger text-white rounded-1 p-1 d-none'
        if (expresiones.cardCvc.test(cardCvc)) {
            setCardCvcValidation(true)
            // validaciones.cardCvc = true
            cardCvcAlert.current.className = 'd-none'
        } else {
            cardCvcAlert.current.className = 'd-flex align-items-center text-danger'
            // validaciones.cardCvc = false;
        }
    }

    const handleChangeCardValidTHRU = (e) => {
        setCardValidTHRU(e.target.value)
        wrongFormAlert.current.className = 'bg-danger text-white rounded-1 p-1 d-none'
        if (expresiones.cardValid.test(cardValidTHRU)) {
            setCardValidTHRUValidation(true)
            // validaciones.cardValid = true
            cardValidAlert.current.className = 'd-none'
        } else {
            cardValidAlert.current.className = 'd-flex align-items-center text-danger'
            // validaciones.cardValid = false;
        }
    }

    if (loader) {
        return <Loader />
    }

    if (orderID) {
        return (
            <PurchaseMessage name={name} email={email} phone={phone} total={total} cardNumber={cardNumber} orderID={orderID} />  
        )
    }

    return (
        <>
            <h1 className='text-center mt-3'>Finalizá tu compra</h1>
            <hr className='w-75 mx-auto fw-bold' />
            <div className='contCheckout d-flex gap-5 container'>
                <div className="checkoutLeftSide w-50">
                    <h3 className='w-100 mb-4'>Productos Agregados</h3>
                    <ProductsCheckout />
                </div>
                <div className="checkoutRightSide w-50">
                    <h3>Datos Personales</h3>
                    <form className='mt-3' id='formm' onSubmit={handleSubmit} action="">
                        <div className='d-flex flex-column'>
                            <label>Nombre</label>
                            <input onChange={handleChangeName} onKeyUp={handleChangeName} onBlur={handleChangeName} type="text" value={name} name="name" className='form-control mb-2' placeholder="John Doe" />
                            <span className='text-danger mb-2 d-none' ref={nameAlert}><IoAlert/>El nombre no puede contener numeros</span>
                        </div>
                        <div className='d-flex flex-column'>
                            <label>Email</label>
                            <input onChange={handleChangeEmail} onKeyUp={handleChangeEmail} onBlur={handleChangeEmail} type="text" value={email} name="email" className='form-control mb-2' placeholder="john@gmail.com" />
                            <span className='text-danger mb-2 d-none' ref={emailAlert}><IoAlert/>Dirección de correo electrónico incorrecto</span>
                        </div>
                        <div className='d-flex flex-column'>
                            <label>Telefono</label>
                            <input onChange={handleChangePhone} onKeyUp={handleChangePhone} onBlur={handleChangePhone} type="text" value={phone} name="phone" className='form-control mb-2' placeholder="3513079987" />
                            <span className='text-danger mb-2 d-none' ref={phoneAlert}><IoAlert/>Numero de telefono debe contener al menos 7 números</span>
                        </div>

                        <div className="datosPersonales_finalizarCompra">
                            <h3 className="mt-2 mb-3">Datos de la tarjeta de Credito</h3>
                            <div className="buyCard">
                                <div className="row justify-content-between">
                                    <div>
                                        <h3 className="fst-italic">Credit Card</h3>
                                        <img src="https://res.cloudinary.com/dotaebdx8/image/upload/v1666771728/ecommerceReact/chip_cgx4ds.svg" alt='cardChip' />
                                    </div>
                                    <div className="leftBuyCard">
                                        <label>Número de tarjeta</label>
                                        <input onChange={handleChangeCardNumber} onKeyUp={handleChangeCardNumber} onBlur={handleChangeCardNumber} value={cardNumber} type="text" name="cardNumber" placeholder="0000 - 0000 - 0000 - 0000" />
                                        <label>Nombre</label>
                                        <input onChange={handleChangeCardName} onKeyUp={handleChangeCardName} onBlur={handleChangeCardName} value={cardName} type="text" name="cardName" placeholder="JOHN DOE" />
                                        <label>CVC</label>
                                        <input onChange={handleChangeCardCvc} onKeyUp={handleChangeCardCvc} onBlur={handleChangeCardCvc} value={cardCvc} type="text" name="cardCvc" placeholder="000" />
                                    </div>
                                    <div className="rightBuyCard">
                                        <div className="row justify-content-end">
                                            <div className="col-md-6 d-flex flex-column">
                                                <label>Hasta</label>
                                                <input onChange={handleChangeCardValidTHRU} onKeyUp={handleChangeCardValidTHRU} onBlur={handleChangeCardValidTHRU} value={cardValidTHRU} type="text" name="cardValidDate" placeholder="00/00" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span ref={wrongFormAlert} className='bg-danger text-white rounded-1 p-1 d-none'><RiAlertFill/> Por favor, ingrese los datos correctamente</span>
                            <span className='text-danger mb-2 d-none' ref={cardNumberAlert}><IoAlert/>Numero de la tarjeta debe contener 16 números</span>
                            <span className='text-danger mb-2 d-none' ref={cardNameAlert}><IoAlert/>Nombre de la tarjeta no debe contener números</span>
                            <span className='text-danger mb-2 d-none' ref={cardCvcAlert}><IoAlert/>Codigo de seguridad debe contener 3 números</span>
                            <span className='text-danger mb-2 d-none' ref={cardValidAlert}><IoAlert/>Fecha de vencimiento invalida</span>
                            <p className="text-bg-danger rounded-1 d-none"><i className="fa-solid fa-triangle-exclamation text-white mx-2"></i>Por favor, rellene los datos correctamente</p>
                            <button className="btn btn-success mt-2 mb-5" type="submit" style={{background: nameValidation && emailValidation && phoneValidation && cardNumberValidation && cardNameValidation && cardCvcValidation && cardValidTHRUValidation? '#198754' : '#074617'}} onClick={() => window.scroll(0, 0)}>Confirmar compra</button> 
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Checkout