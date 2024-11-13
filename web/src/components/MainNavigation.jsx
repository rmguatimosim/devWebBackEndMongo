import { NavLink } from "react-router-dom";

const MainNavigation = () =>{
    return(
        <ul className="mainNav">
            <li className="menu"><NavLink className={({isActive})=> isActive ? 'activeLink' : 'inactiveLink'} to='/'>Home</NavLink> | </li>
            <li className="menu"><NavLink className={({isActive})=> isActive ? 'activeLink' : 'inactiveLink'} to='/cursos'>Cursos</NavLink></li>


        </ul>
    )



}

export default MainNavigation;