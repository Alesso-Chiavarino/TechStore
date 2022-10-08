import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom';

// const {id} = useParams()

const Item = ( {nombre, precio, imagen, id} ) => {
    return (
      <Link className='linkItemCard' to={`/item/${id}`}>
        <Card className='card'>
            <div className='contCardImg'>
                <Card.Img className='cardImg' variant="top" src={imagen} />
            </div>
            <hr />
          <Card.Body>
            <Card.Title className='cardTitle mb-5'> {nombre} </Card.Title>
            <Card.Text className='cardText'>
              {/* Some quick example text to build on the card title and make up the
              bulk of the card's content. */}
              <span className='d-block fw-bold' >{' $' + precio}</span>
              
            </Card.Text>
            <Button variant="dark">Añadir al carrito</Button>
          </Card.Body>
        </Card>
      </Link>
    )
}
export default Item