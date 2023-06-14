// Coleção dinâmina de pares chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['Marca do produto'] = 'Generico';
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto['Marca do produto']

console.log(produto);

console.log('----------------------------------------------------------------------')

const carro = {
    modelo: 'A4',
    valor: 80000,
    proprietario: {
        nome: 'João',
        idade: 56,
        endereco: {
            logradouro: 'Rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Ana',
        idade: 25, 
    }, {
        nome: 'junior',
        idade: 30
    }]
}

carro.proprietario.endereco.numero = 1000;

console.log(carro);

delete carro.proprietario;

console.log(carro);