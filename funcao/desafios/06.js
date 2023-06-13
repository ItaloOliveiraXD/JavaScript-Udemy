function simples (capital, taxaDeJuro ,tempo) {
    let juro = capital * taxaDeJuro * tempo;
    return capital += juro;
}

const aplicacao = simples(20000, 0.10, 12);

console.log(aplicacao);
