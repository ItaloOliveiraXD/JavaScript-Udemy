// Comparando this com funções literais.
let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global); // verificando se o this da função é global.

const obj = {}
comparaComThis = comparaComThis.bind(obj); // mudando a visualização do this da função.
comparaComThis(global);
comparaComThis(obj);
console.log('--------------------------------------------');

// Comparando o this com arrow function.
let comparaComThisArrow = param => console.log(this === param);

comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj); // isso não funciona para arrows functions.
comparaComThisArrow(global);
comparaComThisArrow(module.exports);
