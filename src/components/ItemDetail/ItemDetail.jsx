import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({product}) => {
  return (
      <>
          <article className='cardDetail container bg-white p-3 rounded-2'>
                <div className='topSide'>
                    <div className="leftSide">
                        <div className="contImgID">
                            <img className="imgID" src={product.imagen} alt={product.nombre} />
                        </div>
                    </div>
                    <div className="rightSide">
                        <h2 className='productNameID' >{product.nombre}</h2>
                        <span className='precioID' >${product.precio}</span>
                        <hr />
                        <div className='payWith'>
                            <span className='messageID' >Medios de pago</span>
                            <div className='contIconsID'>
                                <img className='mercadoPagoIcon' src="./img/mercado-pago.webp" alt="mercado-pago-icon" />
                                <img className='visaIcon' src="./img/visa.webp" alt="visa-icon" />
                                <img className='naranjaIcon' src="./img/naranja.svg" alt="naranja-icon" />
                                <img className='americanExpressIcon' src="./img/american-express.png" alt="american-express-icon" />
                                <img className='brubankIcon' src="./img/brubank.png" alt="brubank-icon" />
                                <img className='mastercardIconn' src="./img/mastercard.png" alt="mastercard-icon" />
                            </div>
                        </div>
                        <hr />
                        <ItemCount initial={0} stock={20} />
                        <button className='btn btn-dark btnBuyID w-50 mx-5'>Comprar</button>
                    </div>
                </div>
                <hr />
                <div className="bottomSide">
                    <h5>Descrición</h5>
                    <span className='descriptID'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam veritatis iusto aut dignissimos deserunt voluptates obcaecati dolorum fugit temporibus accusamus iure velit, id a mollitia voluptatem. Vitae doloremque rem inventore.</span>
                </div>
          </article>
      </>
  )
}

export default ItemDetail;