import Slider from "../Slider/Slider";
import ShowProducts from "../ShowProducts/ShowProducts";

const Home = () => {
    return(
        <>
            <Slider/>
            <ShowProducts title={"TECNOHOUSE / PRODUCTOS DESTACADOS"} />
            <ShowProducts title={"TECNOHOUSE / ULTIMAS NOVEDADES"} />
            <ShowProducts title={"TECNOHOUSE / LAS MEJORES TIENDAS"} />
        </>
    )
}
export default Home;