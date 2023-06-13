const conversaoReal = x => `R$ ${x.toFixed(2).toString().replace('.', ',')}`;

soma = 0.1 + 0.2;
console.log(conversaoReal(soma));
