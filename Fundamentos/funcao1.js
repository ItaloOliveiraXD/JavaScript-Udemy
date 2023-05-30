// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma();
imprimirSoma(2, 10, 4, 5, 6, 8);

// Função com retorno
function soma(a, b = 0) {
    return a + b;
}

let resultado = soma(2 , 6);
console.log(resultado);

resultado = soma(5);
console.log(resultado);

resultado = soma();
console.log(resultado);