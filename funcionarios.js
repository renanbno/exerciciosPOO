"use strict";
class funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    apresentar() {
        console.log("O salãrio de " + this.nome + " é de " +
            this.salario + " reais.");
    }
}
;
class Gerente extends funcionario {
    constructor() {
        super("renan ", 15000);
    }
    calcularSalarioMensal() {
        this.salario = (this.salario / 100) * 10;
        console.log(this.salario);
    }
}
class funcionarioUm extends funcionario {
    constructor() {
        super("anaBeatriz ", 1000);
    }
    calcularSalarioMensal() {
        console.log("");
    }
}
class funcionarioDois extends funcionario {
    constructor() {
        super("emilly", 1000);
    }
    calcularSalarioMensal() {
        console.log("");
    }
}
const renan = new Gerente();
renan.apresentar();
renan.calcularSalarioMensal();
const emilly = new funcionarioUm();
emilly.apresentar();
emilly.calcularSalarioMensal();
const anaBeatriz = new funcionarioDois();
anaBeatriz.apresentar();
anaBeatriz.calcularSalarioMensal();
