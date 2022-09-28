import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

    const links = [
        {
            link: "Inicio",
            direc: "#"
        },
        {
            link: "Productos",
            direc: "#"
        },
        {
            link: "Contacto",
            direc: "#"
        }
    ]

    return (
        <>
            <Navbar bg="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#" className='text-white fw-bold fst-italic'>TecnoHouse</Navbar.Brand>
                    <Nav style={{flexDirection: "row"}} className="d-flex">
                        <div>
                            {links.map(link => {
                                return (
                                    <a href="#" className="text-white text-decoration-none mx-3" >{link.link}</a>
                                )
                            })}
                        </div>
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
                        <Offcanvas.Body>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar; 