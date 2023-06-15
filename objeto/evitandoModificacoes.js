// Object.preventExtensions -> Aqui você pode deletar atributos mas não pode adicionar.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Pode ser adicionado mais atributos?', Object.isExtensible(produto));
produto.nome = 'Borracha';
produto.descricao = 'Borracha branca escolar'; // Não será acrescentado pq é um objeto preventExtensions.
delete produto.tag;

console.log(produto)

// Object.seal -> Aqui você não pode nem adicionar nem remover atributos.
const pessoa = { nome: 'Julia', idade: 25}
Object.seal(pessoa);
console.log('Este objeto está selado?', Object.isSealed(pessoa));

pessoa.sobranome = 'Alves';
delete pessoa.nome;
pessoa.idade = 26; // isso pode ser feito quando um objeto esta selado.

console.log(pessoa)

// Object.freeze -> Aqui você não pode fazer nenhum tipo de alteração.
const carro = { modelo: 'F40', marca: 'ferrari'}
Object.freeze(carro);
console.log('Este carro esta congelado?', Object.isFrozen(carro));
carro.marca = 'Fiat';
console.log(carro)
