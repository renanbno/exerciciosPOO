"use strict";
class Musica {
    constructor(titulo, artista, duracao) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }
}
class Playlist {
    constructor() {
        this.musicas = [];
        this.reproduzindo = false;
        this.indiqueAtual = 0;
    }
    adicionarMusica(musica) {
        this.musicas.push(musica);
    }
    reproduzir() {
        if (this.musicas.length > 0) {
            this.reproduzindo = true;
            return "Reproduzindo: "
                + this.musicas[this.indiqueAtual].titulo + ' - '
                + this.musicas[this.indiqueAtual].artista;
        }
        else {
            return "A playlist está vazia";
        }
    }
    pausar() {
        if (this.reproduzindo == true) {
            this.reproduzindo = false;
            return "Música pausada";
        }
        else {
            return "Nenhuma música está sendo reproduzida";
        }
    }
    proxima() {
        if (this.musicas.length > 0) {
            this.indiqueAtual = (this.indiqueAtual + 1) % this.musicas.length;
            return this.reproduzir();
        }
        else {
            return "A playlist está vazia";
        }
    }
}
const musica1 = new Musica("Vai namorar comigo", "Henrique e Juliano", 300);
const musica2 = new Musica(" Enchated", "Taylor Swift", 200);
const musica3 = new Musica(" ATA", "New Jeans", 500);
const minhaPlayList = new Playlist();
minhaPlayList.adicionarMusica(musica1);
minhaPlayList.adicionarMusica(musica2);
minhaPlayList.adicionarMusica(musica3);
console.log(minhaPlayList.reproduzir());
console.log(minhaPlayList.pausar());
console.log(minhaPlayList.proxima());
console.log(minhaPlayList.proxima());
console.log(minhaPlayList.proxima());
