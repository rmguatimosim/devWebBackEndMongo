import { NavLink } from "react-router-dom";

const CursosNavigation = () => {
    return(
        <nav className="cursosNav">
            <ul>
            <li className="menu"><NavLink className={({isActive})=> isActive ? 'activeLink' : 'inactiveLink'} to='/cursos' end>Todos os Cursos</NavLink> | </li> 
            <li className="menu"><NavLink className={({isActive})=> isActive ? 'activeLink' : 'inactiveLink'} to='/cursos/new'>Novo Curso</NavLink></li> 
            </ul>    
            
        </nav>
    )
}

export default CursosNavigation;