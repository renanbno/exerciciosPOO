"use strict";
class Banco {
    constructor(titular, numeroConta, saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }
}
;
class ContaCorrente extends Banco {
    constructor() {
        super("renan", 3580, 500);
    }
    depositar(valor) {
        this.saldo = +valor;
        console.log("depósito realizado com sucesso!");
    }
    sacar(valor) {
        if (this.saldo > valor)
            this.saldo = -valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
class Poupanca extends Banco {
    constructor() {
        super("renan", 3582, 500);
    }
    depositar(valor) {
        this.saldo = +valor;
        console.log("depósito realizado com sucesso!");
    }
    sacar(valor) {
        return this.saldo = -valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
class ContaInvestimento extends Banco {
    constructor() {
        super("renan", 3582, 500);
    }
    depositar(valor) {
        this.saldo = +valor;
        console.log("depósito realizado com sucesso!");
    }
    sacar(valor) {
        return this.saldo = -valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    investir(valor, taxa, prazo) {
        console.log(this.saldo += valor * taxa * prazo);
    }
}
const cliente = new ContaCorrente();
console.log(cliente.sacar(10000));
console.log(cliente.depositar(300));
console.log(cliente.consultarSaldo());
