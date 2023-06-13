// Formas para chamar a função.
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `;
}

const produto = {
    nome: 'notebook',
    preco: 2950,
    desc: 0.1,
    getPreco
}

console.log(getPreco()); // 1
console.log(produto.getPreco()); // 2

const carro = { preco: 55880, desc: 0.22 };
console.log(getPreco.apply(carro)); // 3
console.log(getPreco.apply(carro, [0.20, '$'])); // 4


console.log(getPreco.call(carro)); // 5
console.log(getPreco.call(carro, 0.20, '$')); // 6
