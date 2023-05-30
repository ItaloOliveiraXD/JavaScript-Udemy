function rand([min = 0, max = 100]) {
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const numeroParaSortear = [ 5, 10];
console.log(rand(numeroParaSortear));
console.log(rand([]));
console.log(rand([80]));
console.log(rand([,30]));