// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Eror404 from "./components/Eror404/Eror404";
// import {Component} from 'react';
// import Slider from "./components/Slider/Slider";
// import ShowProducts from "./components/ShowProducts/ShowProducts";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";

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
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<Eror404/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;
