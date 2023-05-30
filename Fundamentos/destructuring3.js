function rand({ min = 0, max = 100}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const numeroParaSorteio = {max: 50, min: 40};
console.log(rand(numeroParaSorteio));
console.log(rand({}));
console.log(rand({max: 80}));
console.log(rand({min: 30}));
// console.log(rand()); isso retorna um erro porque não está sendo passado nenhum objeto.