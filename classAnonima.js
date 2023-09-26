"use strict";
const pessoa = new class {
    constructor() {
        this.primeiroNome = "josé";
        this.ultimoNome = "da Silva";
    }
    getNomeCompleto() {
        return this.primeiroNome + " " + this.ultimoNome;
    }
};
console.log(pessoa.getNomeCompleto());
const treinadorPessoal = new class {
    constructor() {
        this.rotina = [];
    }
    addExercicios(nome, duracao) {
        this.rotina.push({ nome, duracao });
    }
    calcularTempoTotal() {
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        return 0;
    }
};
treinadorPessoal.addExercicios("Corrida", 30);
treinadorPessoal.addExercicios("Abdominal", 15);
treinadorPessoal.addExercicios("Agachamento", 20);
console.log("Tempo necessário para a rotina: " +
    treinadorPessoal.calcularTempoTotal() + "em minutos");
