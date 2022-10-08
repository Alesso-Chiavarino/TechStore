import './ProductsSlider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "../Item/Item";
import {products} from '../../asyncMock'
import { useState, useEffect } from 'react';

const ProductsSlider = ({beg, fin}) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
    
    const [prodsShow, setProdsShow] = useState([])

    useEffect(() => {
        const getProducts = () => {
        
            return new Promise((res) => {
                const filteredProds = products.filter(prod => prod.id >= beg && prod.id <= fin)
                setTimeout(() => {
                    res(filteredProds)
                }, 0)
            } )
        }
        getProducts()
            .then(res => setProdsShow(res))
            .catch(error => console.log(error))
    },[beg, fin])
    
    return (
        <div className="container">
            <Carousel
                className="cardShow"
                swipeable={true}
                draggable={true}
                showDots={false}
                additionalTransfrom={0}
                pauseOnHover
                rewind={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {prodsShow.map((prod) => <Item key={prod.id} {...prod} />)}
            </Carousel>
        </div>
    )
}

export default ProductsSlider