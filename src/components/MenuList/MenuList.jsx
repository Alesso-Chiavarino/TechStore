import './MenuList.css'

const MenuList = ({option}) => {


    return (
        <li style={{listStyle: "none"}} >
            <a className="text-white text-decoration-none mx-3" href="./">{option}</a>
        </li>
    );
};

export default MenuList;