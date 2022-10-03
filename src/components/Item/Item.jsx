import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'

const Item = ( {nombre, precio, categoria, imagen} ) => {
    return (
    <li style={{listStyle: "none"}}>
      <Card className='card'>
          <div className='contCardImg'>
              <Card.Img className='cardImg' variant="top" src={imagen} />
          </div>
          <hr />
        <Card.Body>
          <Card.Title className='cardTitle'> {nombre} </Card.Title>
          <Card.Text className='cardText'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <span className='text-end d-block fw-bold' >{' $' + precio}</span>
            
          </Card.Text>
          <Button variant="dark">Add to cart</Button>
        </Card.Body>
      </Card>
    </li>
    )
}
export default Item