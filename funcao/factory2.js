function criaProduto(nome, preco, desconto = 0.1) {
    const produto = {
        nome,
        preco,
        desconto
    }
    return produto;
}

const prod1 = criaProduto('celular', 1200);
console.log(prod1);

const prod2 = criaProduto('camisa', 50);
console.log(prod2);
