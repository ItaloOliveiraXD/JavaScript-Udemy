const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos);

pilotos.pop(); // Remove o ultimo elemento do array.
console.log(pilotos);

pilotos.push('Verstappen'); // Adiciona um elemento no final do array.
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona um elemento no primeiro indice do array
console.log(pilotos);

// splice pode adicionar ou remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Remover
pilotos.splice(4, 1);
console.log(pilotos);

// Dividir o array

const algunsPilotos1 = pilotos.slice(2); // Pega todos os pilotos aparti do indice 2.
const algunsPilotos2 = pilotos.slice(1, 4); // Pega os pilotos aparti do indice 1 até o ultimo indice informado -1;
