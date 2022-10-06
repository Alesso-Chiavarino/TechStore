import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Loader from '../Loader/Loader';

const MercadoLibre = () => {

    const [products, setProducts] = useState([])
    const [query, setQuery] = useState('')
    const [loading, setLoader] = useState(false)

    const getProducts = () => {
        setLoader(true)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            .then(res => res.json())
            .then(data => setProducts(data.results))
            .finally(() => setLoader(false))
    }

    if(loading) {
        return <Loader/>
    }


  return (
    <section className='bg-dark container-fluid'>
        <div className='d-flex justify-content-center align-items-center flex-column gap-3' >
            <h1 className='text-white mt-5'>MercadoLibre</h1>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <button className='btn btn-danger' onClick={getProducts} >Search</button>
        </div>
        
          <div className="d-flex justify-content-center flex-wrap mt-3">

              {products.map((prod) => {

                return(
                    // <div className='d-flex flex-row flex-wrap justify-content-center'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={prod.thumbnail} alt={prod.title} />
                            <hr />
                            <Card.Body>
                                <Card.Title>{prod.title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <p className='fw-bold d-block'>${prod.price}</p>
                                <Button variant="dark">Buy</Button>
                            </Card.Body>
                        </Card>
                    // </div>
                    
                )

              })}


          </div>
    </section>
  )
}

export default MercadoLibre