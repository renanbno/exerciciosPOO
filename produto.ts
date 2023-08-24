class Produto {
    nomeProduto: string;
    Valor: number;

    constructor(nomeProduto:string, Valor: number, ) {

        this.nomeProduto = nomeProduto;
        this.Valor = Valor;
        }
        Apresentar(){
        return "o produto "+ this.nomeProduto +" de " + this.Valor;

        }
        ApresentarDesconto(desconto:number){
            return "Com desconto de "+desconto + " % " + " vai ficar" 
            +(this.Valor - (desconto*this.Valor)/100 )


        }

}

let produto1 = new Produto("Calça", 300);
console.log(produto1.Apresentar());
console.log(produto1.ApresentarDesconto(15));

let produto2 = new Produto("Sapato", 400);
console.log(produto2.Apresentar());
console.log(produto2.ApresentarDesconto(25));

let produto3 = new Produto("Bota", 700);
console.log(produto3.Apresentar());
console.log(produto3.ApresentarDesconto(40));