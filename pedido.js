"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["aguardando"] = "Aguardando Preparo,";
    StatusPedido["preparando"] = "Em Preparo,";
    StatusPedido["saiu"] = "Saiu para Entrega,";
    StatusPedido["entregue"] = "Entregue.";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produto = [];
        this.status = StatusPedido.aguardando;
    }
    adicionarPedido(ProdutoPedido) {
        this.produto.push(ProdutoPedido);
    }
    atualizarStatus(statusDoPedido) {
        this.status = statusDoPedido;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutosPedido() {
        console.log("Produtos pedidos");
        for (let i = 0; i < this.produto.length; i++) {
            console.log("o " + this.produto[i].nome + " tem o valor de " + this.produto[i].valor);
        }
    }
}
const produtoPedido1 = new ProdutoPedido("Camisa", 80);
const produtoPedido2 = new ProdutoPedido("Notbook", 6000);
const produtoPedido3 = new ProdutoPedido("Capinha", 10);
const PPedido = new Pedido();
PPedido.adicionarPedido(produtoPedido1);
PPedido.adicionarPedido(produtoPedido2);
PPedido.adicionarPedido(produtoPedido3);
const novoPedido = new Pedido();
console.log("Statudo atual do pedido: " + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.preparando);
console.log("statudo atual do pedido: " + novoPedido.exibirStatus());
(PPedido.exibirProdutosPedido());
