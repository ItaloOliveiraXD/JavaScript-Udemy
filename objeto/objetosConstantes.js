// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
console.log(pessoa);
pessoa.nome = 'Ana';
console.log(pessoa);

// Aqui vai apresentar um erro, pois esta tentando mudar a referência de pessoa que é uma constante
// pessoa -> 456 -> {...}
// pessoa = { nome: 'Maria' } 

// Congelando um objeto para não ter nada alterado.
Object.freeze(pessoa);

pessoa.nome = 'Julia'; // Não ira mudar pois esse objeto esta congelado.
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Italo' });
console.log(pessoaConstante);