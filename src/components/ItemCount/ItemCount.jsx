import './ItemCount.css'
import {VscTriangleUp, VscTriangleDown} from 'react-icons/vsc'
import { useState } from 'react'

const ItemCount = ({initial, stock}) => {

    const [counter, setCounter] = useState(0)

    const add = () => {
        counter < stock && setCounter(counter+1)
    }

    const subtract = () => {
        counter > initial && setCounter(counter-1)
    }

    return (
        <div className="contIC">
            <div className='leftSideCounterIC'>
                <span className="counterIC" >{counter}</span>
            </div>
            <div className='rightSideCounterIC'>
                <button className="btnIC"> <VscTriangleUp className='arrowIC' onClick={add} /> </button>
                <button className="btnIC" > <VscTriangleDown className='arrowIC' onClick={subtract}/> </button>
            </div>
        </div>
    )
}

export default ItemCount;