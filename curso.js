// const alunos = require('./aluno');
const alunos = require('./estudantes');

class curso {
    nomeDoCurso = 'Certified Tech Developer';
    notaDeAprovacao = 7;
    faltasMaximas = 5;
    listaEstudantes = [];
    constructor(lista) {
        this.listaEstudantes = lista;
    }

    adicionarEstudantes(nome, quantidadeDeFaltas, notas) {
        this.listaEstudantes.push({
            nome: nome,
            quantidadeDeFaltas: parseInt(quantidadeDeFaltas),
            notas: notas,
            media: 0,
        });
    }

    aprovacao(aluno) {
       
        if (aluno.quantidadeDeFaltas < estudantes.faltasMaximas && aluno.media >= estudantes.notaDeAprovacao) {
            return aluno.nome + ': Aprovado';
        } else if (aluno.quantidadeDeFaltas === estudantes.faltasMaximas && aluno.media > (estudantes.notaDeAprovacao * 1.1)) {
            return aluno.nome + ' Aprovado';
        } else {
            return aluno.nome + ': Reprovado';
        }
    }

    listaAprovacao() {
        const lista = this.listaEstudantes;
        const resultado = [];

        lista.forEach(function(aluno) {
          resultado.push(estudantes.aprovacao(aluno));
            
        });
              return resultado;
};
}

const estudantes = new curso(alunos.listaAlunos);

estudantes.adicionarEstudantes("Carlos Miguel", 1, [8, 9, 10]);
estudantes.adicionarEstudantes("Amanda Rodrigues", 5, [9, 7, 5]);
alunos.calcularMedia();


console.log(estudantes.listaAprovacao());


module.exports = curso;



// if (curso.aprovacao(curso.listaEstudantes[1])) {
//     console.log('Aluno ${listaEstudantes[1].nome} esta aprovado');
// } else {
//         console.log("Aluno ${listaEstudantes[1].nome} esta reprovado");
// };
