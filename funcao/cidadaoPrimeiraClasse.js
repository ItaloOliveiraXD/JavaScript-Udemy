// Função em JS é First-Class Object (Citizens)
// Higher-order Function

// criar de forma literal
function fun1() { }

// armazenar em uma variável
const fun2 = function () { }

// armazenar dentro de um array
const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3));

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Estou falando!' }
console.log(obj.falar())

// passar função com parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') });

//uma função pode retorna/conter uma função.
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(5);
const somaMais = soma(2, 3);
somaMais(4);