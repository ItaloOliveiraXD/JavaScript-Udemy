console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Pedro', 'Clecio');

aprovados = ['Italo', 'Sophia', 'Kelly'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados[3] = 'Paulo';
console.log(aprovados[3]);

aprovados.push('Lia');
console.log(aprovados[4]);

console.log(aprovados);

console.log('------------------------------------------------------------------');

// Funcões para utilizar Arrays

aprovados.length; // Saber o tamanho do array
delete aprovados[1]; // Deletar um dado do array aparti do seu índice e deixa seu valor undefined.
// Manipula o array
// primeiro param: indice que vai iniciar a manipulção.
// segundo param: quantos itens vai deletar do array aparti do indice informado.
// aparti do terceiro você informa o que vai ser adicionado no array.
aprovados.splice(1, 1, 'Sophia', 'Yuri');

console.log(valores.pop()); // remove o ultimo elemento do array.
console.log(valores.shift()); // remove o primeiro elemento do array.
aprovados.sort(); // Organiza o array em ordem alfabetica.

console.log(aprovados);
