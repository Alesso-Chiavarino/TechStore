import './DropdownMenuList.css'
import {Link} from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'

const DropdownMenuList = () => {

    const [subcategory1, setSubcategory1] = useState(false);
    const [subcategory2, setSubcategory2] = useState(false);
    const [subcategory3, setSubcategory3] = useState(false);
    const [subcategory4, setSubcategory4] = useState(false);

    const components = [{
        section: "Placas de video",
        route: "/category/placas-de-video"
    },
    {
        section: "Procesadores",
        route: "/category/procesadores"
    },
    {
        section: "Placas madre",
        route: "/category/placas-madre"
    },
    {
        section: "Fuentes",
        route: "/category/fuentes"
    },
    {
        section: "Discos rigidos",
        route: "/category/discos-rigidos"
    },
    {
        section: "Discos solidos",
        route: "/category/discos-solidos"
    },
    {
        section: "Coolers",
        route: "/category/coolers"
    },
    {
        section: "Discos M2",
        route: "/category/discos-m2"
    },
    {
        section: "Memorias RAM",
        route: "/category/memorias-ram"
    },
    ]

    return (
        <>
            <div className='d-flex flex-row' onMouseOver={() => setSubcategory1(true)} onMouseLeave={() => setSubcategory1(false)}>
                <li className='LiDrowpdownLinkCategory w-100' >
                    <Link className="DrowpdownlinkCategory" to=""> Componentes de PC <FaChevronRight className='text-white mt-1 float-end' /> </Link>
                </li>
                {subcategory1 && <ul className='contSubcategory'>{components.map(comp => <li><Link to={`${comp.route}`} className='text-white text-decoration-none'>{comp.section}</Link></li>)}</ul>}
            </div>
            <div className='d-flex flex-row'>
                <li className='LiDrowpdownLinkCategory w-100' onMouseOver={() => setSubcategory2(true)} onMouseLeave={() => setSubcategory2(false)} >
                    <Link className="DrowpdownlinkCategory" to=""> Notebooks <FaChevronRight className='text-white mt-1 float-end' /> </Link>
                </li>
                {subcategory2 && <div className='contSubcategory'>hola</div>}
            </div>
            <div className='d-flex flex-row'>
                <li className='LiDrowpdownLinkCategory w-100' onMouseOver={() => setSubcategory3(true)} onMouseLeave={() => setSubcategory3(false)} >
                    <Link className="DrowpdownlinkCategory" to=""> Periféricos <FaChevronRight className='text-white mt-1 float-end' /> </Link>
                </li>
                {subcategory3 && <div className='contSubcategory'>hola</div>}
            </div>
            <div className='d-flex flex-row'>
                <li className='LiDrowpdownLinkCategory w-100' onMouseOver={() => setSubcategory4(true)} onMouseLeave={() => setSubcategory4(false)} >
                    <Link className="DrowpdownlinkCategory" to=""> Celulares y Telefonía <FaChevronRight className='text-white mt-1 float-end' /> </Link>
                </li>
                {subcategory4 && <div className='contSubcategory'>hola</div>}
            </div>
        </>
    );
}

export default DropdownMenuList;