import { products } from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {hola} = useParams()

    useEffect(() => {
      const getProducts = () => {
        return new Promise((res) => {
          const findedProd = products.find(prod => prod.id === Number(hola));
          setTimeout(() => {
            res(findedProd)
          },500)})
      }
        getProducts()
            .then(data => setProduct(data))
            .finally(() => setLoading(false))
          }, [])
  
          if(loading) {
            return <Loader/>; 
          }

  return (
    <section className="container-fluid details">
        <div className="contItemDetail">
            <ItemDetail product = {product} />
        </div>
    </section>
  )
}

export default ItemDetailContainer;