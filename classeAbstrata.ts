abstract class Animal{
    private nome: string;
    private qtdPatas: number;

    constructor(nome: string, qtdPatas: number){
        this.nome = nome;
        this.qtdPatas = qtdPatas;
    }
        abstract fazerBarulho(): void;

        apresentar(): void{
        console.log("Este é um " + this.nome + "com " +  
        this.qtdPatas + " patas");

    }
};

class Dog extends Animal {
    constructor(){
        super("Cachorro " , 4);
    }
    fazerBarulho(): void {
        console.log("O cachorro está latindo ");
    }
}

class Cat extends Animal {
    constructor(){
        super("gato " , 4);
    }
    fazerBarulho(): void {
        console.log("O gato está miando");
    }
}
class Bird extends Animal {
    constructor(){
        super("Passaro" , 4);
    }
    fazerBarulho(): void {
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


