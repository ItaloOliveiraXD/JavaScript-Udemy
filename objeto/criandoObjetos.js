// Usando notação literal.
const obj1 = {};
console.log(obj1)

// Object em JS.
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// Funções contrutoras

function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.getValorComDesconto = () => {
        return preco * (1 - desconto);
    }
}

const p1 = new Produto('Cadeira', 20, 0.05);
const p2 = new Produto('NotBook', 2590.00, 0.15);

console.log(p1.nome);
console.log(p1.getValorComDesconto());

console.log(p2.nome);
console.log(p2.getValorComDesconto());

// Função Factory;
function CriarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const funciaonario1 = CriarFuncionario('João', 3750.00, 5);
const funciaonario2 = CriarFuncionario('Maria', 6895.00, 2);

console.log(funciaonario1.nome);
console.log(funciaonario1.getSalario());

console.log(funciaonario2.nome);
console.log(funciaonario2.getSalario().toFixed(2));

// Object.create
const filha = Object.create(null);
filha.nome = 'Sophia';
filha.idade = 6;
console.log(filha);

// Uma função famosa que retorna objeto.
const fromJSON = JSON.parse('{"info": "EU ERA UM JSON"}');
console.log(fromJSON.info);
