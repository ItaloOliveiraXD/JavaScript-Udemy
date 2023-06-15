const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai);
filha1.nome = 'Ana';
console.log(filha1.nome, filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome, filha2.corCabelo);

// Duas maneiras de percorrer as chaves junto com os atributos da herança.
for (let key in filha2) {
    console.log(key);
}

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(`É do objeto: ${key}`) : console.log(`É por herança: ${key}`)
}
