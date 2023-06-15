class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamento(...lancamento) {
        lancamento.forEach((l) => {
            this.lancamentos.push(l);
        })
    }

    sumario() {
        let valor = 0;
        this.lancamentos.forEach((l) => {
            valor += l.valor;
        })

        return valor;
    }

}

const salario = new Lancamento('Salário', 3890.00);
const energia = new Lancamento('Energia', -250);
const agua = new Lancamento('Agua', -140);

const historicoFinanceiro = new CicloFinanceiro(6, 2023);
historicoFinanceiro.addLancamento(salario, energia, agua);
console.log(historicoFinanceiro.sumario());
