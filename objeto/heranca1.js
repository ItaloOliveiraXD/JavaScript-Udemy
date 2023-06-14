const ferrari = {
    modelo: 'F40',
    velocMaxima: 324
}

const volvo = {
    modelo: 'V40',
    velocMaxima: 200
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);

function MeuObjeto() {}
console.log(MeuObjeto.prototype);