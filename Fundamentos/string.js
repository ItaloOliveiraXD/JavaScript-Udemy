const escola = "cod3r";

console.log(escola.charAt(4)); // Retorna o caracter referente a possição passada no parâmetro.

console.log(escola.charAt(5)); // Se não possuir caracter no parâmetro passado ele retorna vazio.

console.log(escola.indexOf('o')); // Informa a possição de onde está localizado o parâmetro passado.

console.log(escola.substring(1)); // Retorna o valor aparti do indice informado.

console.log(escola.substring(0, 3)); // Retorna o valor do primeiro índice informado até um indice a menos do último índice informado.

console.log('Escola '.concat(escola).concat('!')); // Faz concatenação de strings.
console.log('Escola '+ escola + '!'); // Faz concatenação de strings.yy

console.log(escola.replace(3, 'e')); // Faz a trocar de caracter informado no parâmetro

console.log('maria, isis, neto, iraci'.split(',')); // Transforma uma String em um array aparti do parâmetro passado.

