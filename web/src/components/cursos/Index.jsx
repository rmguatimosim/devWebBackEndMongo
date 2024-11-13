import axios from 'axios'
import {Link, useLoaderData } from 'react-router-dom'

const Index = () => {
    const cursos = useLoaderData();
    return(
        <>
            <h1>Cursos do Campus Osório</h1>
            <ul>
                {cursos.map((curso) => <li className="cursos" key={curso._id}><Link to={`/cursos/${curso._id}`}>{curso.sigla}</Link></li>)}
            </ul>
        </>
    )
}

export default Index

export async function getCursos(){
    const url = 'http://localhost:3000/cursos'
    const {data} = await axios.get(url);
    return data;
}