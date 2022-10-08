import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Eror404 from "./components/Eror404/Eror404";
// import {Component} from 'react';
// import Slider from "./components/Slider/Slider";
// import ShowProducts from "./components/ShowProducts/ShowProducts";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
// import MercadoLibre from "./components/MercadoLibre/MercadoLibre";

const App = () => {

    const optionss = [{
        section: "Inicio",
        route: "/"
    }, {
        section: "Productos",
        route: "/products"
    }, {
        section: "Contacto",
        route: "/contact"
    }];

    const options = [{
        section: "Placas de video",
        route: "/category/placaVideo"
    },
    {
        section: "Procesadores",
        route: "/category/procesador"
    },
    {
        section: "Placas madre",
        route: "/category/placaMadre"
    },
    {
        section: "Fuentes",
        route: "/category/fuente"
    },
    {
        section: "Discos rigidos",
        route: "/category/discoRigido"
    },
    {
        section: "Discos solidos",
        route: "/category/discoSolido"
    },
    {
        section: "Coolers",
        route: "/category/cooler"
    },
    {
        section: "Discos M2",
        route: "/category/discoM2"
    },
    {
        section: "Memorias RAM",
        route: "/category/memoriaRam"
    },
]

    return (
        <BrowserRouter>
            <NavBar options={options} />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/item/:hola" element={<ItemDetailContainer/>} />
                <Route path="/category/:categoryName" element={<ItemListContainer/>} />
                <Route path="*" element={<Eror404/>} />
            </Routes>
            <Footer/>
            {/* <ItemDetailContainer/> */}
        </BrowserRouter>
    )
}
export default App;