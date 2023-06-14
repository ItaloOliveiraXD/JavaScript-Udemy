// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso.

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'P' }
const filho = { __proto__: pai, attr3: 'F' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelaraMais(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMaxima;
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMaxima}km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 324 // shdowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// Fazendo a relação de herança.
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

ferrari.acelaraMais(150);
console.log(ferrari.status());

volvo.acelaraMais(250);
console.log(volvo.status());

