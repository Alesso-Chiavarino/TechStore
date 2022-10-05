import { getProducts } from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then(res => res.find(re => re.id === 1))
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