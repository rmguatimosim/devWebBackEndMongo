import { Link } from "react-router-dom";


const Home = () =>{
    return(
        <>
            <h1>Bem vindo a página de Cursos do Campus Osório.</h1>
            <Link to='/cursos'><h2>Acessar a Lista de cursos.</h2></Link>
        </>
    )



}

export default Home;