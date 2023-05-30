const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);

console.log(valores.length);

valores.push({id: 3}, false, null, 'teste'); // isso é uma má pratica.
console.log(valores);

console.log(valores.pop()); // remove o ultimo elemento do array.
console.log(valores.shift()); // remove o primeiro elemento do array.
delete valores[5]; // remove um elemento no indice passado no array.
console.log(valores);

console.log(typeof valores);
