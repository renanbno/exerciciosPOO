abstract class Banco {

    protected titular: string;
    private numeroConta: number;
    protected saldo: number;

    constructor( titular: string, numeroConta: number, saldo: number) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }

    abstract depositar(valor: number): void;

    abstract sacar(valor: number): void;

    abstract  consultarSaldo(): number;


};

class ContaCorrente extends Banco {
    constructor() {
        super("renan",3580, 500);
    }
    depositar(valor: number):void  {
       this.saldo = + valor;
       console.log ("depósito realizado com sucesso!");
    }

    sacar(valor: number): void{
        if(this.saldo > valor)
         this.saldo = - valor;
     }
    consultarSaldo(): number {
        return this.saldo;
    }
}


class Poupanca extends Banco {
    constructor() {
        super("renan", 3582, 500);
    }
    depositar(valor: number):void  {
       this.saldo = + valor;
       console.log ("depósito realizado com sucesso!");
    }
    sacar(valor: number): number {
        return this.saldo = - valor;
     }
    consultarSaldo(): number {
        return this.saldo;
    }
}

class ContaInvestimento extends Banco {
    constructor() {
        super("renan", 3582, 500);
    }
    depositar(valor: number):void  {
       this.saldo = + valor;
       console.log ("depósito realizado com sucesso!");
    }
    sacar(valor: number): number {
        return this.saldo = - valor;
     }
    consultarSaldo(): number {
        return this.saldo;
    }
    investir(valor: number, taxa: number, prazo:number): void {
        console.log (this.saldo +=  valor*taxa*prazo); 

}

}
const cliente = new ContaCorrente();
console.log(cliente.sacar(10000))
console.log(cliente.depositar(300));
console.log(cliente.consultarSaldo());


