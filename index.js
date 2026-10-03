const cliente= "Juliana Prado"
const opcaoMenu= 2
const quantidade= 2
const formaPagamento= "dinheiro"
const prato= "capuccino"
const precoUnitario= 12

let statuPedido=  "pendente"
let situacaoPedido= "pendente"

switch (opcaoMenu) {
    case 1:
        console.log("cafe")
        break
    case 2:
        console.log("capuccino")
        break
    case 3:
        console.log("bolo")
        break
    case 4:
        console.log("sanduiche")
        break
    default:
        console.log("opcao invalida")
}

switch (opcaoMenu) {
    case 1 :
        console.log(6)
        break
    case 2 :
        console.log(12)
        break
    case 3 :
        console.log(15)
        break
    case 4 :
        console.log(20)
        break
    default :
    console.log(0)
}


const subtotal = precoUnitario * quantidade

const situacaoFrete= subtotal >= 80 ? "Frete grátis" : "Frete pago"
const frete= subtotal >= 80 ? 0 : 8
const total= subtotal * frete

switch (pagamento) {
    case "pix":
        console.log("Pagamento via pix")
        break
    case "cartao":
        console.log("Pagamento via cartao")
        break
    case "dinheiro":
        console.log("Pagamento em dinheiro")
        break
    default :
    console.log("Forma de pagamento inválida")

}

switch (desconto) {
    case "cartao" :
        console.log(10)
        break
    case "dinheiro" :
        console.log(10)
        break
    case "pix" :
        console.log(0)
    default :

}

switch (situacaoPedido) {
    case "pendente" :
        console.log("aguardando pagamento")
        break
    case "aprovado" :
        console.log("pedido em preparo")
        break
    case "enviado" :
        console.log("pedido a caminho")
        break
    case "cancelado" :
    console.log("pedido cancelado")
        break
    default :
    console.log("status desconhecido")
}

module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}
