import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';
import ItemList from '../ItemList/ItemList';

const NavBar = ({options}) => {
    return (
        <>
            <Navbar bg="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#" className='text-white fw-bold fst-italic'><Brand title= "TecnoHouse" /></Navbar.Brand>
                    <Nav style={{flexDirection: "row"}} className="d-flex">
                        <ul className='d-flex m-0' >
                            {options.map((op, i) => <ItemList key={i} option= {op}/>)}
                        </ul>
                    </Nav>
                    <Navbar.Toggle className='shadow-none border-0' aria-controls="offcanvasNavbar" ><span style={{color:"#fff"}}><CartWidget/></span></Navbar.Toggle>
                    <Navbar.Offcanvas
                        className="bg-white"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel"><CartWidget/> Carrito</Offcanvas.Title>
                        </Offcanvas.Header>
                            <hr className='w-75 m-auto' />
                            <p className='mt-3 mx-3' >Agregá lo que quieras al carrito!</p>
                        <Offcanvas.Body>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar; 