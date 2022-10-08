import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/Navbar/NavBar'
import Eror404 from "./components/Eror404/Eror404";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
// import MercadoLibre from "./components/MercadoLibre/MercadoLibre";

const App = () => {

    const links = [{
        section: "Inicio",
        route: "/"
    }, {
        section: "Quienes Somos",
        route: "/quienes-somos"
    }, {
        section: "Contacto",
        route: "/contacto"
    },
    {
        section: "Terminos y Condiciones",
        route: "/terminos-condiciones"
    }];

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

    return (
        <BrowserRouter>
            <NavBar categories={categories} />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                <Route path="/category/:categoryName" element={<ItemListContainer/>} />
                <Route path="*" element={<Eror404/>} />
            </Routes>
            <Footer links={links} />
        </BrowserRouter>
    )
}
export default App;