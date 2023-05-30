const nome = 'rebeca';
const concatenacao = 'olá ' + nome + '!';
const template = `olá ${nome}!`;

console.log(concatenacao);
console.log(template);

// expressões...
console.log(`1 + 1 = ${1 + 1}`);

// Usando funcão...
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);
