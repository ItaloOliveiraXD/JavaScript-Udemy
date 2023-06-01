let dobro = function (a) {
    return console.log(2 * a);
}

dobro(2);

dobro = (a) => {
    console.log(2 * a);
}

dobro(3);

dobro = a => console.log(2 * a); // retorno está implícito.

dobro(4);

console.log('-----------------------------------------------');

let ola = () => console.log('Olá!!!'); // arrow function sem parâmetros.

ola();

ola = _ => console.log('Olá!!! ' + _ ); // Posso passar parâmetros.

ola('Italo');
