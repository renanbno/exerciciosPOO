class Pessoa{
    nome: string;
    idade: number;
    comidas: string[];
    
    constructor(nome: string, idade:number, 
    comidas: string[]){
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;   
    }
    cumprimentar(){
        let msgHabilitacao = "já posso tirar minha CNH";
        if(this.idade < 18)
        {
            msgHabilitacao = " Não posso tirar minha CNH";
        }
        return "Olá meu nome é "+this.nome+ 
        " e tenho "+ this.idade + "anos."
    }
    
    comidasFavoritas(){
        console.log("Minhas(s) comida(s) favorita(s)");
        for(let i=0; i< this.comidas.length; i++ ){
            console.log(this.comidas[i]);}

    }


}

let pessoal = new Pessoa("João ", 17, ["doguinho", "macarrão"]);
console.log(pessoal.cumprimentar());
console.log(pessoal.comidasFavoritas());