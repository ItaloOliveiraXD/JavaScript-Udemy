const quaseArray = { 0: 'Rafael', 1: 'Vitor', 2: 'Ana' }
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray.toString());