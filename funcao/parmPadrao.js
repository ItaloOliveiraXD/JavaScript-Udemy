// Estrategia 1 para criar valor padrao.
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1(), soma1(3), soma1(2, 3, 5));
console.log(soma1(0, 0, 0,)); // Dessa forma o algoritimo não ficará eficaz passando numeros zero.
console.log('--------------------------------------------------------')

// Estrategia 2, 3, 4 para gerar número padrão;
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c; // Melhor forma dos três metodos feitos.
    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(2, 3, 5));
console.log(soma2(0, 0, 0,));
console.log('--------------------------------------------------------')

// Melhor forma para deixar os parâmetros com valores padrões.
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3(), soma3(3), soma3(2, 3, 5));
console.log(soma3(0, 0, 0,));
