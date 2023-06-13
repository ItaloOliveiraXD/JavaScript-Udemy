function Pessoa(nome) {

    this.falar = function() {
        console.log(`Meu nome é ${nome}`);
    }
}

const p1 = new Pessoa('Maria');
p1.falar();