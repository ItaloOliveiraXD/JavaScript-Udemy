console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Revertendo toda essa string'.reverse());

Array.prototype.first = function () {
    return this[0];
}

const numeros = [10, 1, 2, 3, 4];
console.log(numeros.first());