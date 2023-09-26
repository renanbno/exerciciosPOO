const pessoa = new class {
    private primeiroNome = "josé";
    private ultimoNome = "da Silva";
    getNomeCompleto(){
        return this.primeiroNome + " " + this.ultimoNome;
    }
}

console.log(pessoa.getNomeCompleto());

const treinadorPessoal = new class {
    private rotina: {nome: string, duracao: number}[] = [];

    addExercicios(nome:string, duracao: number): void {
        this.rotina.push({nome, duracao});
    }

    calcularTempoTotal():number{
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        return 0;
    }
}

treinadorPessoal.addExercicios("Corrida", 30);
treinadorPessoal.addExercicios("Abdominal", 15);
treinadorPessoal.addExercicios("Agachamento", 20);
console.log("Tempo necessário para a rotina: "+
treinadorPessoal.calcularTempoTotal() + "em minutos");