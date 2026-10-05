const cliente= "Juliana Prado"
const opcaoMenu= 2
const quantidade= 2
const formaPagamento= "dinheiro
const statusPedido= "enviado"

let prato= ""
let precoUnitario= 0
let subtotal= 0
let situacaoFrete=  ""
let valorFrete= ""
let pagamentoMensagem= ""
let percentualDesconto= ""
let situacaoPedido= ""

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
        precoUnitario = 6
        break
    case 2 :
        console.log(12)
        precoUnitario = 12
        break
    case 3 :
        console.log(15)
        precoUnitario= 15
        break
    case 4 :
        console.log(20)
        precoUnitario= 20
        break
    default :
    console.log(0)
        precoUnitario= 0
}


const subtotal = precoUnitario * quantidade

const situacaoFrete= subtotal >= 80 ? "Frete grátis" : "Frete pago"
const frete= subtotal >= 80 ? 0 : 8
const total= subtotal * frete

switch (formaPagamento) {
    case "pix":
        console.log("Pagamento via pix")
        pagamentoMensagem = "Pagamento via pix"
        break
    case "cartao":
        console.log("Pagamento via cartao")
        pagamentoMensagem = "Pagamento via cartao"
        break
    case "dinheiro":
        console.log("Pagamento em dinheiro")
        pagamentoMensagem= "Pagamento em dinheiro"
        break
    default :
    console.log("Forma de pagamento invalida"
        pagamentoMensagem = "Forma de pagamento invalida"

}

switch (formaPagamento) {
    case "cartao" :
    case "dinheiro" :
        console.log(10)
        descontoPercentual = 10
        break
    case "pix" :
        console.log(0)
        descontoPercentual = 0
    default :
        console.log(0)
        descontoPercentual = 0

}

let valorDesconto = (subtotal * descontoPercentual) / 100
let valorTotal = subtotal - valorDesconto + valorFrete

switch (statusPedido) {
    case "pendente" :
        console.log("aguardando pagamento")
        situacaoPedido = "aguardando pagamento"
        break
    case "aprovado" :
        console.log("pedido em preparo")
        situacaoPedido = "pedido em preparo"
        break
    case "enviado" :
        console.log("pedido a caminho")
        situacaoPedido = "pedido a caminho"
        break
    case "cancelado" :
    console.log("pedido cancelado")
        situacaoPedido= "pedido cancelado"
        break
    default :
    console.log("status desconhecido")
        situacaoPedido = "status desconhecido
}

const resumo = (`
===================================================
               CAFETERIA
===================================================
cliente: ${cliente}
opcaoMenu: ${opcaoMenu}
quantidade: ${quantidade}
formaPagamento: ${formaPagamento}
statusPedido: ${statusPedido}
prato: ${prato}
precoUnitario: ${precoUnitario}
subtotal: ${subtotal}
freteStatus: ${freteStatus}
frete: ${frete}
pagamentoStatus: ${pagamentoStatus}
descontoPercentual: ${descontoPercentual}
desconto: ${desconto}
total: ${total}
statusMensagem: ${statusMensagem}
`)

console.log(resumo)

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
