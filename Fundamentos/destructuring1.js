const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log(n, i);

const { sobrenome, idade: ida} = pessoa;
console.log(sobrenome, ida);

const { sobrenome1 = 'silva', idade: id} = pessoa;
console.log(sobrenome1, id);

const { logradouro, numero} = pessoa.endereco;
console.log(logradouro, numero);
