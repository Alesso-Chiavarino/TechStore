import './MenuList.css'
import {NavLink} from 'react-router-dom'
 
const MenuList = ({section, route}) => {


    return (
        <li style={{listStyle: "none", padding: "20px 15px"}} >
            <NavLink className="text-dark text-decoration-none mx-3 linkCategory" to={route}> {section} </NavLink>
        </li>
    );
};

export default MenuList;