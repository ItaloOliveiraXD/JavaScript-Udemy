// Closure é o escopo criado quando uma função é declarado
// Esse escopo permite a função acessar e manipular variáveis externas a função

// Contexto léxico em ação!
const x = 'global';

function fora() {
    const x = 'local';
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFunc = fora()
console.log(minhaFunc());