const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome} `);
}

fabricantes.forEach(imprimir);
console.log('-------------------------------')
fabricantes.forEach((n, i) => console.log(`${i + 1}. ${n} `))