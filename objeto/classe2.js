class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'Estudando') {
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai{
    constructor() {
        super('Oliveira');
    }
}

const filho = new Filho;
console.log(filho);