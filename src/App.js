import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/Navbar/NavBar'
import Eror404 from "./components/Eror404/Eror404";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path= "/" element= { <Home/> } />
                <Route path= "/cart" element= { <Cart/> } />
                <Route path= "/item/:itemId" element= { <ItemDetailContainer/> } />
                <Route path= "/category/:categoryName" element= { <ItemListContainer/> } />
                <Route path= "*" element= { <Eror404/> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App;