class ProdutoLoja{
nome: string;
preco: number;
constructor(nomeDoProduto: string, precoDoProduto: number){
    this.nome = nomeDoProduto;
    this.preco = precoDoProduto;
}
}

class CarrinhoDeCompras{
    produtosDoCarrinho: ProdutoLoja[]=[];
    constructor() {
        //this.produtosDoCarrinho = [];
    }

    adicionarProduto(produto : ProdutoLoja){
        this.produtosDoCarrinho.push(produto);
    }

    excluirProduto(nomeDoProduto:string){
        this.produtosDoCarrinho.filter((item) => item.nome !== nomeDoProduto);
    }

    excluirProduto2(produto:ProdutoLoja){
        this.produtosDoCarrinho.filter(item => item.nome !== produto.nome);
        //excluir produto do carrinho
    }

    caucularValorTotal(){
        let soma = 0;
        for (let  i = 0;  i < this.produtosDoCarrinho.length;  i++) {
            soma = soma + this.produtosDoCarrinho[ i].preco;
            //esse aq é o for que vai fazer o cauculo do valor do carrinho
        }
        return soma.toFixed(2); //esse serve para as casas decimais, no caso aqui sera 2 casas.
        
    }
   
exibirProdutos(){
    console.log("Produtos do Carrinho");
    for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
        console.log("Produto: "+this.produtosDoCarrinho[i].nome+"R$ "+this.produtosDoCarrinho[i].preco.toFixed(2));
    }

    }


}

//essa class de baixo é a do carrinho de compras
class Loja {
produtosDoEstoque: ProdutoLoja[] = [];
carrinhoDeCompra = new CarrinhoDeCompras();

constructor(){

}

adionarProdutoAoEstoque (produto: ProdutoLoja) {
    this.produtosDoEstoque.push(produto);
}

removerProdutoDoEstoque (produto:ProdutoLoja){
    this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome)
}

adicionarProdutoAoCarrinho(produto:ProdutoLoja){
    const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome !== produto.nome)
    if (produtoEncontrado){
        this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
        return "Produto adicionado ao carrinho de comoara";
    }
    else{
        return "Produto não encontrado ao estoque da loja"
    }
}

    removerProdutoDoCarrinho(produto:ProdutoLoja){
        this.carrinhoDeCompra.excluirProduto2(produto);
        //excluir produto do carrinho 
    }

    exibirProdutoDoCarrinho(){
        this.carrinhoDeCompra.exibirProdutos();
    } 
}


const produtoLoja1 = new ProdutoLoja("camiseta", 20.99);
const produtoLoja2 = new ProdutoLoja("calça", 44.99);
const produtoLoja3 = new ProdutoLoja("sapato", 27.99);
const produtoLoja4 = new ProdutoLoja("mela", 76.39);

const minhaLoja=new Loja();

minhaLoja.adionarProdutoAoEstoque(produtoLoja1);
minhaLoja.adionarProdutoAoEstoque(produtoLoja2);
minhaLoja.adionarProdutoAoEstoque(produtoLoja3);
minhaLoja.adionarProdutoAoEstoque(produtoLoja4);


minhaLoja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja4);

minhaLoja.removerProdutoDoCarrinho(produtoLoja4);

minhaLoja.removerProdutoDoEstoque(produtoLoja4);

minhaLoja.exibirProdutoDoCarrinho();

console.log("Total de carrinho de compras: R$ "
+ minhaLoja.carrinhoDeCompra.caucularValorTotal());