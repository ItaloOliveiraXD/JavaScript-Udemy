const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Ana',
        nota: 8.9
    },{
        nome: 'Vinicius',
        nota: 7.5
    }],
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Fabricio',
        nota: 9.5
    },{
        nome: 'Sophia',
        nota: 10
    }]
}]

const getNotasAlunos = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotasAlunos);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}
const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);