class aluno {
    listaAlunos = [];

    adicionarAluno(nome, quantidadeDeFaltas, notas) {
        this.listaAlunos.push({
            nome: nome,
            quantidadeDeFaltas: parseInt(quantidadeDeFaltas),
            notas: notas,
            media: 0,
        });
    }
    calcularMedia() {
        let total;

        this.listaAlunos.forEach(alunos => {
            total = 0;

            alunos.notas.forEach(nota => {
                total = total + nota;
            });

            alunos.media = total / alunos.notas.length;

            //  console.log(total / alunos.notas.lenght);
        });
    }
    faltas(indice) {
        this.listaAlunos[indice].quantidadeDeFaltas++;
    }

}

const alunos = new aluno();



module.exports = alunos;



