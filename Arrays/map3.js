// Construindo meu próprio map
Array.prototype.map2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[1], i, this))
    }

    return newArray;
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit Lapis", "preco": 45.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Primeira maneira
let resultado = carrinho.map2((e) => {
    let itens = JSON.parse(e);
    return itens.preco;
})

console.log(resultado);

// Outra maneira de resolver
const paraObjeto = e => JSON.parse(e);
const precoDoProduto = produto => produto.preco;

resultado = carrinho.map2(paraObjeto).map2(precoDoProduto);
console.log(resultado);