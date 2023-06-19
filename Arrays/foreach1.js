const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ];

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
})
console.log('----------------------------------');

aprovados.forEach(nome => console.log(nome));
console.log('----------------------------------');

const imprimirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(imprimirAprovados);
