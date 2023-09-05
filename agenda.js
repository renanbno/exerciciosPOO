"use strict";
class Evento {
    constructor(nome, data, horario) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}
class Agenda {
    constructor() {
        this.lista = [];
    }
    adicionarevento(evento) {
        this.lista.push(evento);
    }
    Vizualizar() {
        console.log("Meus eventos");
        for (let i = 0; i < this.lista.length; i++) {
            console.log(this.lista[i]);
        }
    }
    remover(evento) {
        this.lista = this.lista.filter((item) => item.nome !== evento.nome);
        return "evento deletado";
    }
}
const evento1 = new Evento("Casamento", "05/08", "18h");
const evento2 = new Evento("aniversario", "09/06", "12h");
const evento3 = new Evento("sla", "07/12", "15h");
const meuseventos = new Agenda();
meuseventos.adicionarevento(evento1);
meuseventos.adicionarevento(evento2);
meuseventos.adicionarevento(evento3);
console.log(meuseventos.Vizualizar());
console.log(meuseventos.remover(evento3));
console.log(meuseventos.Vizualizar());
