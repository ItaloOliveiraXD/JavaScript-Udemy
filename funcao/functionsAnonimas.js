const soma = function (x, y) {
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(2, 3);
imprimirResultado(3, 4, soma);
imprimirResultado(5, 3, function (x, y) {
    return x - y;
});
imprimirResultado(5, 3, (x, y) => x * y);

const pessoa = {
    idade: 25,
    // metódo de escrever function anômimos dentro de objeto.
    falar() {
        console.log('Minha idade é', this.idade);
    }
}

pessoa.falar();