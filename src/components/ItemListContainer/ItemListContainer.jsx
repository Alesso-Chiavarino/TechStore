import { products } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [prods, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res) => {
                const filteredProds = products.filter(prod => prod.categoria === categoryName)
                setLoading(true)
                setTimeout(() => {
                    res(categoryName? filteredProds : products)
                }, 1000)
            })} 
        getProducts()
            .then(res => setProducts(res))
            .finally(() => setLoading(false))
        }, [categoryName])
        
    if(loading) {
        return <Loader/>
    }

    return(
        <>
            <h1 className='text-center mt-4 mb-5'>{prods[0].categoryName}</h1>
            <div>
                <ItemList products = {prods} />
            </div>
        </>    
    )
}

export default ItemListContainer;