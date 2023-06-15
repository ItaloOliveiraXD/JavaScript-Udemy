// Transformando um objeto em JSON.
const obj1 = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj1));

// Transformando um JSON para um objeto
let stringJson = '{ "a": 1, "b": "String", "c": true, "d": {}, "e": [] }';
console.log(JSON.parse(stringJson));
