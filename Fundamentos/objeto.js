const prod1 = {};
prod1.nome = 'Celular Ulta Mega';
prod1.preco = 4998.90;
prod1['Desconto legal'] = 0.40; // evitar atributos com espaços.

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        propriedade: 1,
        obj2: {
            propriedade: 2
        }
    }
};

delete prod2.obj.obj2; // deletando um elemento dentro do objeto.

console.log(prod2);