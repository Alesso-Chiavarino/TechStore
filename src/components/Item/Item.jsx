import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ( {nombre, precio, categoria, imagen} ) => {
    return (
    <Card  style={{ width: '250px', marginRight: "20px" }}>
        <div style={{width: "200px", margin: "auto", padding:"10px"}} >
            <Card.Img variant="top" style={{width: "150px", height: "150px"}} src={imagen} />
        </div>
      <Card.Body>
        <Card.Title style={{fontSize: "18px"}} >{nombre}</Card.Title>
        <Card.Text style={{fontSize: "15px"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <p className='text-end fw-bold' >{' $' + precio}</p>
          
        </Card.Text>
        <Button variant="dark">Add to cart</Button>
      </Card.Body>
    </Card>
    )
}
export default Item