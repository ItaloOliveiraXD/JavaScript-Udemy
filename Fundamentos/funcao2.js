// Armazenando uma função em uma variável.
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma função arrow em um variável.
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

// retorno implícido
const subtracao = (a, b) => a - b;
console.log(subtracao(5, 2));

const imprimirTexto = t => console.log(t);
imprimirTexto('Muito Legal!!!');
