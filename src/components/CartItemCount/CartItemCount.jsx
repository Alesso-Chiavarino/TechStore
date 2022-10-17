import './CartItemCount.css'
import { useState } from 'react'
// import '../ItemCount/ItemCount.css'
import {VscTriangleUp, VscTriangleDown} from 'react-icons/vsc'

const CartItemCount = ({initial, quantity ,stock}) => {

    const [quantityy, setQuantityy] = useState(quantity)

    const add = () => {
        setQuantityy(quantityy + 1)
    }
    // console.log(quantityy)
    
    const subtract = () => {
        setQuantityy(quantityy - 1)
    }

    return (
        <>
            <div className="contIC">
                <div className='leftSideCounterIC'>
                    <span className="counterIC" >{quantityy}</span>
                </div>
                <div className='rightSideCounterIC'>
                    <button className="btnIC"> <VscTriangleUp onClick={add}  className='arrowIC' /> </button>
                    <button className="btnIC"> <VscTriangleDown className='arrowIC' onClick={subtract} /> </button>
                </div>
            </div>
        </>
    )
}

export default CartItemCount