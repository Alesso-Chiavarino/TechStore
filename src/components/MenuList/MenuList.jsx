import './MenuList.css'
import {Link} from 'react-router-dom'
 
const MenuList = ({section, route}) => {


    return (
        <li style={{listStyle: "none"}} >
            <Link className="text-white text-decoration-none mx-3" to={route}> {section} </Link>
        </li>
    );
};

export default MenuList;