abstract class Empresa{
    private nome: string;
    protected salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }
    abstract calcularSalarioMensal(): void;

        apresentar(): void{
        console.log("O salãrio de " + this.nome + " é de " +  
        this.salario + " reais.");
}
};

class Gerente extends Empresa {
    constructor(){
        super("renan " , 15000);
    }
    calcularSalarioMensal(): void {
     this.salario = (this.salario / 100) * 10
     console.log(this.salario)
    }
}

class Desenvolvedor extends Empresa {
    constructor(){
        super("anaBeatriz " , 1000);
    }
    calcularSalarioMensal(): void {
        console.log("");
    }
}

class DesenvolvedorDois extends Empresa {
    constructor(){
        super("emily" , 1000);
    }
    calcularSalarioMensal(): void {
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