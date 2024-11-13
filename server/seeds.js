const Curso =  require('./models/curso')

const curso1 = new Curso({
    sigla: 'ADS',
    nome: 'Tecnologia em Análise e Desenvolvimento de Sistemas' 
})

const curso2 = new Curso({
    sigla: 'TPG', 
    nome: 'Tecnologia em Processos Gerenciais'
})

// curso1.save()
//     .then(curso =>{
//         console.log(curso)
//     })
//     .catch(e => {
//         console.log(e)
//     })

Curso.insertMany([curso1, curso2])
    .then(res=>{
        console.log(res)
    })
    .catch(e=>{
        console.log(e)
    })


