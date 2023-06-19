const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit Lapis", "preco": 45.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Primeira maneira
let resultado = carrinho.map((e) => {
    let itens = JSON.parse(e);
    return itens.preco;
})

console.log(resultado);

// Outra maneira de resolver
const paraObjeto = e => JSON.parse(e);
const precoDoProduto = produto => produto.preco;

resultado = carrinho.map(paraObjeto).map(precoDoProduto);
console.log(resultado);