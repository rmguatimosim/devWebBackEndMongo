import axios from "axios";
import {Link, Form, redirect} from 'react-router-dom';


const New = () => {
    return(
    <div className="formAdicionar">
        <h1>Adicionar novo Curso</h1>
        <Form method="post">
                <label htmlFor="sigla">Sigla: </label>
                <input type="text" id="sigla" size="30" name="sigla"/> <br />

                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" size="30" name='nome'/> <br />
                <br />

                <button>Adicionar</button>

            </Form>
            <br />
            <Link to='/cursos'><button>Voltar</button> </Link>

    </div>
    )
}

export default New;

export async function addCurso({request}){
    const data = await request.formData()
    const curso = {
        sigla: data.get('sigla'),
        nome: data.get("nome")
    }
    await axios.post(`http://localhost:3000/cursos`, curso)
    return redirect(`/cursos`);
}