const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.8, bolsista: true },
    { nome: "Pedro", nota: 9.0, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(a => a.nota).reduce((acumulador, atual, indice) => {
    console.log(`${indice}:`, acumulador, `+ ${indice + 1}:`, atual);
    return acumulador + atual;
})

console.log(resultado);