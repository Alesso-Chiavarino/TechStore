// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
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
import MercadoLibre from "./components/MercadoLibre/MercadoLibre";

const App = () => {

    const options = [{
        section: "Inicio",
        route: "./"
    }, {
        section: "Productos",
        route: "./products"
    }, {
        section: "Contacto",
        route: "./contact"
    }];

    return (
        <BrowserRouter>
            <NavBar options={options} />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/detail" element={<ItemDetailContainer/>} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<Eror404/>} />
            </Routes>
            <Footer/>
            {/* <ItemDetailContainer/> */}
        </BrowserRouter>
    )
}
export default App;