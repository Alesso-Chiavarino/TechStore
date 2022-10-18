import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';
import MenuList from '../MenuList/MenuList';
import './NavBar.css'
import Counter from '../Counter/Counter';
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../../asyncMock'
import { useState, useRef } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { CartContext } from '../../context/CartContext';

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
    const { searchProducts, writeText } = useContext(SearchContext)

    const [query, setQuery] = useState('')
    const inputRef = useRef(null)
    // console.log(query)

    const getProducts = () => {

        const notFound = products.filter(prod => prod.nombre.toLowerCase().includes('awdawdawawfaegeg'))
        const filteredProds = products.filter(prod => prod.nombre.toLowerCase().includes(query) || prod.categoria.toLowerCase().includes(query) || prod.categoryName.toLowerCase().includes(query))
        return new Promise((res) => {
            setTimeout(() => {
                res(query === '' ? notFound : filteredProds)
            }, 0)
        })
    }

    const getSearch = () => {
        getProducts()
            //guardo lo buscadó en mi contexto
            .then(res => searchProducts(res));
        writeText(inputRef.current.value)
        inputRef.current.value = ''
    }

    const navigate = useNavigate()
    const getSearchEnter = (e) => {
        //si presiono enter...
        if (e.keyCode === 13) {
            getProducts()
                .then(res => searchProducts(res));
            writeText(inputRef.current.value)
            inputRef.current.value = ''
            navigate('/search')
        }
    }
    
    //   console.log(search.length)
    // para contador de carrito dinamico
    const {cart} = useContext(CartContext)
   
    //contador de items en el cart
    const cartItemCounter = () => {
        let cartMap = cart.map(prod => prod.cantidad)
        let itemCountCart = cartMap.reduce((a, b) => a + b, 0)
        return itemCountCart;
    }
    const itemCountCart = cartItemCounter()
    


    return (
        <>
            <Navbar className='navBar' expand={false}>
                <Container fluid>

                    <Brand img="../../img/icon.png" title="TechStore" />

                    <div className='d-flex align-items-center'>
                        <input
                            ref={inputRef}
                            onKeyUp={getSearchEnter}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Buscá lo que desees!"
                            className="me-2 navSearch form-control"
                            aria-label="Search"
                        />
                        <Link to={'/search'} >
                            <FaSearch className='searchIcon' onClick={getSearch} />
                        </Link>
                    </div>
                    <Link className='cart' to="/cart"> <span style={{ color: "#fff" }}> <CartWidget /> <Counter value={itemCountCart} /> </span> </Link>

                </Container>
            </Navbar>

            <nav className='container-fluid navCategory' >
                <ul className='d-flex justify-content-center m-0'>
                    {categories.map((cat, i) => <MenuList key={i} section={cat.section} route={cat.route} />)}
                </ul>
            </nav>
        </>
    );
}
export default NavBar; 