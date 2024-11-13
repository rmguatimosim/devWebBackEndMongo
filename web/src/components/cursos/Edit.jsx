import axios from "axios";
import {Link, useRouteLoaderData, Form, redirect} from 'react-router-dom'


const Edit = () => {
    const curso = useRouteLoaderData('cursoDetail');
    return(
        <div className="formAdicionar">  
            <h1>Alterar Curso</h1>
            <Form method="post">
                <label htmlFor="sigla">Sigla: </label>
                <input type="text" id="sigla" size="30" name="sigla" defaultValue={curso.sigla ? curso.sigla : ''}/> <br />

                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" size="30" name='nome'
                defaultValue={curso.nome ? curso.nome : ''} /> <br />
                <br />

                <button>Alterar</button>

            </Form>
            <Link to={`/cursos/${curso._id}`}><button>Voltar</button> </Link>
        </div>
    )
}

export default Edit;

export async function updateCurso({request, params}){
    const data = await request.formData()
    const curso = {
        sigla: data.get('sigla'),
        nome: data.get("nome")
    }
    await axios.patch(`http://localhost:3000/cursos/${params.id}`, curso)
    return redirect(`/cursos/${params.id}`);
}

