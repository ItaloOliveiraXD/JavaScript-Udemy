const obj1 = {};
obj1.nome = 'Bola';
console.log(obj1.nome);

class Obj {
    constructor(nome) {
        this.nome = nome;
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
