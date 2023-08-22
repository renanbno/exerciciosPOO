"use strict";
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return "eae, parça eu sou a " + this.nome + " uma "
            + this.raca + "  de " + this.idade + " anos";
    }
    apresentarPara(humano) {
        return "eae, tranquilo " + humano + "? eu me chamo " + this.nome + " e eu sou uma "
            + this.raca + "  de " + this.idade + " anos";
    }
}
let emilly = new Cachorro("Emilly", "Viralata", 16);
let mariana = new Cachorro("Mariana", "Cadela", 16);
console.log(emilly.nome);
console.log(mariana.nome);
console.log(emilly.apresentar());
console.log(mariana.apresentar());
console.log(mariana.apresentarPara("Ana"));
