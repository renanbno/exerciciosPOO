"use strict";
class Empresa {
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
class Gerente extends Empresa {
    constructor() {
        super("renan ", 15000);
    }
    calcularSalarioMensal() {
        this.salario = (this.salario / 100) * 10;
        console.log(this.salario);
    }
}
class Desenvolvedor extends Empresa {
    constructor() {
        super("anaBeatriz ", 1000);
    }
    calcularSalarioMensal() {
        console.log("");
    }
}
class DesenvolvedorDois extends Empresa {
    constructor() {
        super("emily", 1000);
    }
    calcularSalarioMensal() {
        console.log("");
    }
}
const renan = new Gerente();
renan.apresentar();
renan.calcularSalarioMensal();
const emily = new Desenvolvedor();
emily.apresentar();
emily.calcularSalarioMensal();
const anaBeatriz = new DesenvolvedorDois();
anaBeatriz.apresentar();
anaBeatriz.calcularSalarioMensal();
