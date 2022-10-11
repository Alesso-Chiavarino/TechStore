import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Offcanvas, Form, } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';
import MenuList from '../MenuList/MenuList';
import './NavBar.css'
import Counter from '../Counter/Counter';
import {FaSearch} from 'react-icons/fa'
// import { Link } from 'react-router-dom';
// import { products } from '../../asyncMock'
// import { useState, useRef } from 'react'
// import Item from '../Item/Item';

const NavBar = ({categories}) => {

    // const [query, setQuery] = useState('')
    // const [prods, setProds] = useState([])
    // const inputRef = useRef(null)
    // const resultRef = useRef(null)
    // console.log(query)

    // const getProducts = () => {

    //     const notFound = products.filter(prod => prod.nombre.toLowerCase().includes('awdawdawawfaegeg'))
    //     const filteredProds = products.filter(prod => prod.nombre.toLowerCase().includes(query) || prod.categoria.toLowerCase().includes(query) || prod.categoryName.toLowerCase().includes(query) )
    //     return new Promise((res) => {
    //       setTimeout(() => {
    //         res(query === '' ? notFound : filteredProds)
    //       }, 0)
    //     })
    //   }
    
    //   const traer = () => {
    //     getProducts()
    //       .then(res => setProds(res));
    //     resultRef.current.innerHTML = inputRef.current.value
    //   }

    //   console.log(prods)


    return (
        <>
            <Navbar className='navBar' expand={false}>
                <Container fluid>

                    <Brand img="../../img/icon.png" title="TechStore"/>

                    <Form className="formSearch">
                        <Form.Control
                            // ref={inputRef}
                            // onChange={(e) => setQuery(e.target.value)}
                            type="search"
                            placeholder="Buscá lo que desees!"
                            className="me-2 navSearch"
                            aria-label="Search"
                        />
                        {/* <Link to={'/search'} >  */}
                        {/* <FaSearch className='searchIcon' onClick={traer} /> */}
                        <FaSearch className='searchIcon'/>
                         {/* </Link> */}
                    </Form>

                    <Navbar.Toggle className='shadow-none border-0' aria-controls="offcanvasNavbar" ><span style={{ color: "#fff" }}><CartWidget /> <Counter value={0} /> </span></Navbar.Toggle>
                    <Navbar.Offcanvas
                        className="bg-white"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Carrito</Offcanvas.Title>
                        </Offcanvas.Header>
                        <hr className='w-75 m-auto' />
                        <p className='mt-3 mx-3' >Agregá lo que quieras al carrito!</p>
                        <Offcanvas.Body>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
            
            <nav className='container-fluid navCategory' >
                <ul className='d-flex justify-content-center m-0'>
                    {categories.map((cat, i) => <MenuList key={i} section= {cat.section} route = {cat.route} />)}
                </ul>
            </nav>
            
            {/* PARTE SEARCH */}
            {/* <div className='d-flex justify-content-center align-items-center'>
                <h1 className='mx-3 mt-3'>Resultado de :</h1> <h1 className='mt-3' ref={resultRef}></h1>
            </div>
            <ul className='d-flex flex-wrap justify-content-center mt-5'>
                {prods.map(prod => <Item key={prod.id} {...prod}/>)}
            </ul> */}
        </>
    );
}
export default NavBar; 