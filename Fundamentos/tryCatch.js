function tratarErroELancar(error) {
    // throw new Error('Reveja seu código');
    // throw 10;
    // throw true;
    // throw 'mensagem';
    throw {
        nome: error.name,
        msg: error.message,
        data: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase().concat('!!!!'));
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log('finalizado');
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj);
