import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import {Component} from 'react';
import Slider from "./components/Slider/Slider";

export default class App extends Component {

    options = ["Inicio", "Productos", "Contacto"];

    constructor() {
        super();
        this.state = {options: this.options}
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <NavBar options = {this.state.options} />
                    <Slider/>
                    <ItemListContainer/>
                </header>
            </div>
        )
    }
   
}