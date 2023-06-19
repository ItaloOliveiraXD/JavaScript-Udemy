const produtos = [
    { nome: "Notbook", preco: 3590.50, fragil: true },
    { nome: "iPad", preco: 4199.00, fragil: true },
    { nome: "Copo de Vidro", preco: 22.99, fragil: true },
    { nome: "Copo de Plastico", preco: 10.50, fragil: false }

]

// console.log(produtos.filter( e => {
//     return e.fragil && e.preco > 2500;
// }))

const caro = p => p.preco >= 500;
const fragil = p => p.fragil;

console.log(produtos.filter(caro).filter(fragil))