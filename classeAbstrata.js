"use strict";
class Animal {
    constructor(nome, qtdPatas) {
        this.nome = nome;
        this.qtdPatas = qtdPatas;
    }
    apresentar() {
        console.log("Este é um " + this.nome + "com " +
            this.qtdPatas + " patas");
    }
}
;
class Dog extends Animal {
    constructor() {
        super("Cachorro ", 4);
    }
    fazerBarulho() {
        console.log("O cachorro está latindo ");
    }
}
class Cat extends Animal {
    constructor() {
        super("gato ", 4);
    }
    fazerBarulho() {
        console.log("O gato está miando");
    }
}
class Bird extends Animal {
    constructor() {
        super("Passaro", 4);
    }
    fazerBarulho() {
        console.log("O passaro está cantando");
    }
}
const cachorro = new Dog();
cachorro.apresentar();
cachorro.fazerBarulho();
const gato = new Cat();
cachorro.apresentar();
cachorro.fazerBarulho();
const passaro = new Bird();
cachorro.apresentar();
cachorro.fazerBarulho();
