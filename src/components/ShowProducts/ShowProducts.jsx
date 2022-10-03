import ProgressBar from 'react-bootstrap/ProgressBar';
import './ShowProducts.css'

const ShowProducts = ({title}) => {
    return (
        <div className='container containerShow' >
            <h3 className='title1' > {title} </h3>
            <ProgressBar className='progressBar' variant='dark' animated now={33} />
        </div>
    )
}
export default ShowProducts;