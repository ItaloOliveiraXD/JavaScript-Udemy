Array.prototype.filter2 = function (callback) {

    const newArray = []

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }

    return newArray;
}

const produtos = [
    { nome: "Notbook", preco: 3590.50, fragil: true },
    { nome: "iPad", preco: 4199.00, fragil: true },
    { nome: "Copo de Vidro", preco: 22.99, fragil: true },
    { nome: "Copo de Plastico", preco: 10.50, fragil: false }

]

const caro = p => p.preco >= 500;
const fragil = p => p.fragil;

console.log(produtos.filter2(caro).filter2(fragil));