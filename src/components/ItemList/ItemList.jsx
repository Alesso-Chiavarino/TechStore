import Item from "../Item/Item"

const ItemList = ({ products }) => {
    
    return (
        <article className="d-flex mt-3">
            {products.map(prod =>  <Item key={prod.id} {...prod} />)}
        </article>
    )
}
export default ItemList