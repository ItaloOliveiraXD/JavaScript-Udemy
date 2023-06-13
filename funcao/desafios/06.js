function simples (capital, taxaDeJuro ,tempo) {
    const juro = capital * taxaDeJuro * tempo;
    return capital += juro;
}

const aplicacao = simples(20000, 0.10, 12);

console.log(aplicacao);

function composto (capital, taxaDeJuro ,tempo) {
    const montante = capital * Math.pow((1 + taxaDeJuro), tempo);

    return montante.toFixed(2);
}

const aplicacao2 = composto(20000, 0.10, 12);
console.log(aplicacao2);