"use strict";
class ContaBancaria {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    exibirSaldo() {
        return this.nome + " seu saldo é de R$" + this.saldo;
    }
    exibirDeposito(deposito) {
        this.saldo = this.saldo + deposito;
        return "Saldo ínicial de R$" + (this.saldo - deposito) + " com um deposito de R$ "
            + deposito + "seu novo saldo é de "
            + this.saldo;
    }
    exibirSaque(saque) {
        if (this.saldo > saque) {
            this.saldo = this.saldo - saque;
            return "Saldo ínicial de R$" + (this.saldo + saque) + " com um saque de R$ "
                + saque + " seu novo saldo é de "
                + this.saldo;
        }
        else {
            return "Nao tem como sacar isso seu(a) POBRE";
        }
    }
}
let pessoa1 = new ContaBancaria("João", 1000);
console.log(pessoa1.exibirSaldo());
console.log(pessoa1.exibirDeposito(500));
console.log(pessoa1.exibirSaque(200));
let pessoa2 = new ContaBancaria("Renan", 100);
console.log(pessoa2.exibirSaldo());
console.log(pessoa2.exibirDeposito(40));
console.log(pessoa2.exibirSaque(3));
let pessoa3 = new ContaBancaria("Emilly mendiga", 1);
console.log(pessoa3.exibirSaldo());
console.log(pessoa3.exibirDeposito(0));
console.log(pessoa3.exibirDeposito(0));
console.log(pessoa3.exibirSaque(100000));
