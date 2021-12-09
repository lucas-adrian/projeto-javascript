let alunos = require('./aluno'); 


alunos.adicionarAluno("Lucas Adrian", 4, [7, 10, 8]);
alunos.adicionarAluno("Maria Clara", 2, [5, 8, 3]);
alunos.adicionarAluno("Carol", 0, [10,9.5,10]);
alunos.adicionarAluno("Evelise", 3, [7,9,8]);
alunos.calcularMedia();


module.exports = alunos;