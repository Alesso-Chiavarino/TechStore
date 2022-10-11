import './ItemCount.css'
import {VscTriangleUp, VscTriangleDown} from 'react-icons/vsc'
import { useState } from 'react'

const ItemCount = ({initial, stock, func}) => {

    
    const [counter, setCounter] = useState(0)

    const add = () => {
        counter < stock && setCounter(counter + 1)
    }

    const subtract = () => {
        counter > initial && setCounter(counter - 1)
    }

    return (
        <>
            <div className="contIC">
                <div className='leftSideCounterIC'>
                    <span className="counterIC" >{counter}</span>
                </div>
                <div className='rightSideCounterIC'>
                    <button className="btnIC" disabled={counter === stock} > <VscTriangleUp className='arrowIC' onClick={add} /> </button>
                    <button className="btnIC" disabled={counter === initial} > <VscTriangleDown className='arrowIC' onClick={subtract}/> </button>
                </div>
            </div>
            <button className='btn btn-dark w-50 mb-3 mx-5 float-end' onClick={() => func(counter)} >Añadir al carrito</button>
        </>
    )
}

export default ItemCount;