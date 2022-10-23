import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../services/firebaseConfig'

const ItemListContainer = () => {

    const [prods, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'products');
        const ref = categoryName? query(collectionProd, where('category', '==', categoryName)) : collectionProd;
        
        getDocs(ref)
            .then(res => {
                const products = res.docs.map(prod => {
                    return {
                        id: prod.id, ...prod.data(),
                    }
                });
                setProducts(products)
            })
            .catch(eror => console.log(eror))
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





// const ItemListContainer = () => {

//     const [prods, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const {categoryName} = useParams();

//     useEffect(() => {
//         const getProducts = () => {
//             return new Promise((res) => {
//                 const filteredProds = products.filter(prod => prod.categoria === categoryName)
//                 setLoading(true)
//                 setTimeout(() => {
//                     res(categoryName? filteredProds : products)
//                 }, 1000)
//             })} 
//         getProducts()
//             .then(res => setProducts(res))
//             .finally(() => setLoading(false))
//         }, [categoryName])
        
//     if(loading) {
//         return <Loader/>
//     }

//     return(
//         <>
//             <h1 className='text-center mt-4 mb-5'>{prods[0].categoryName}</h1>
//             <div>
//                 <ItemList products = {prods} />
//             </div>
//         </>    
//     )
// }

// export default ItemListContainer;