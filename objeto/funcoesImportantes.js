const pessoa = {
    nome: 'Rebeca', 
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([k, v]) => {
    console.log(`${k}: ${v}`);
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2024'
})

console.log(pessoa)


// Object.assign (ECMAScript 2013)
const destino = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(destino, o1, o2)

console.log(obj);