import  './ProductsSearch.css'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import Item from '../Item/Item'
// import 

const ProductsSearch = () => {

    const {search, text} = useContext(SearchContext)

  return (
      <>
          <div className='d-flex flex-column'>
              <h1 className='mx-3 mt-3'>Resultado de: {text}</h1>
              <h5 className='mx-3 mt-3'>Cantidad de resultados: {search.length}</h5>
          </div>
          <ul className='d-flex flex-wrap justify-content-center mt-5'>
              {search.map(prod => <Item key={prod.id} {...prod} />)}
          </ul>
      </>
  )
}

export default ProductsSearch