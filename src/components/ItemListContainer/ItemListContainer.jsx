import { getProducts } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import Loader from '../Loader/Loader';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(res => {
            setProducts(res)
        }).finally(() => setLoading(false))
        }, [])
        
    if(loading) {
        return <Loader/>
    }

    return(
        <>
            <h1 className='text-center mt-3'>listado de productos</h1>
            <div>
                <ItemList products = {products} />
            </div>
        </>    
    )
}

export default ItemListContainer;