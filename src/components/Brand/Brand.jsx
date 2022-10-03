import './Brand.css'

const Brand = ( {img, title} ) => {
    return (
        <div className='contIcono'>
            <img className='icono' src={img} alt={title + ' icon'} /><h3 className='brand'> {title} </h3>
        </div>
    );
};

export default Brand;