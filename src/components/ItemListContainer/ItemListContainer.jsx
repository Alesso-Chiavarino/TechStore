import { getProducts } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(res => {
            setProducts(res)
        }).finally(() => setLoading(false))
        }, [])
    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div className='d-flex justify-content-center flex-column align-items-center' >
            <h1 className='mt-3'>listado de productos</h1>
            <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer;