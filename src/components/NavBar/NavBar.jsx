import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Form, } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';
import MenuList from '../MenuList/MenuList';
import './NavBar.css'
import Counter from '../Counter/Counter';
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { products } from '../../asyncMock'
import { useState, useRef } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const NavBar = () => {

    const categories = [{
        section: "Placas de video",
        route: "/category/placas-de-video"
    },
    {
        section: "Procesadores",
        route: "/category/procesadores"
    },
    {
        section: "Placas madre",
        route: "/category/placas-madre"
    },
    {
        section: "Fuentes",
        route: "/category/fuentes"
    },
    {
        section: "Discos rigidos",
        route: "/category/discos-rigidos"
    },
    {
        section: "Discos solidos",
        route: "/category/discos-solidos"
    },
    {
        section: "Coolers",
        route: "/category/coolers"
    },
    {
        section: "Discos M2",
        route: "/category/discos-m2"
    },
    {
        section: "Memorias RAM",
        route: "/category/memorias-ram"
    },
]

    //traigo contexto
    const {searchProducts, writeText} = useContext(SearchContext)

    const [query, setQuery] = useState('')
    const inputRef = useRef(null)
    // console.log(query)

    const getProducts = () => {

        const notFound = products.filter(prod => prod.nombre.toLowerCase().includes('awdawdawawfaegeg'))
        const filteredProds = products.filter(prod => prod.nombre.toLowerCase().includes(query) || prod.categoria.toLowerCase().includes(query) || prod.categoryName.toLowerCase().includes(query) )
        return new Promise((res) => {
          setTimeout(() => {
            res(query === '' ? notFound : filteredProds)
          }, 0)
        })
      }
    
      const traer = () => {
        getProducts()
            //guardo lo buscadó en mi contexto
          .then(res => searchProducts(res));
          writeText(inputRef.current.value)
          inputRef.current.value = ''
      }

    //   console.log(search.length)
      


    return (
        <>
            <Navbar className='navBar' expand={false}>
                <Container fluid>

                    <Brand img="../../img/icon.png" title="TechStore"/>

                    <Form className="formSearch">
                        <Form.Control
                            ref={inputRef}
                            onChange={(e) => setQuery(e.target.value)}
                            type="search"
                            placeholder="Buscá lo que desees!"
                            className="me-2 navSearch"
                            aria-label="Search"
                        />
                        <Link to={'/search'} > 
                        <FaSearch className='searchIcon' onClick={traer} />
                        {/* <FaSearch className='searchIcon'/> */}
                         </Link>
                    </Form>

                    <Link className='cart' to= "/cart"> <span style={{ color: "#fff" }}> <CartWidget /> <Counter value={0} /> </span> </Link>

                </Container>
            </Navbar>
            
            <nav className='container-fluid navCategory' >
                <ul className='d-flex justify-content-center m-0'>
                    {categories.map((cat, i) => <MenuList key={i} section= {cat.section} route = {cat.route} />)}
                </ul>
            </nav>
            
            {/* PARTE SEARCH */}
        </>
    );
}
export default NavBar; 