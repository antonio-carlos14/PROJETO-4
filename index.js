const cliente= "Juliana Prado"
const opcaoCardapio= 2
const quantidade= 2
const pagamento= "dinheiro"

let statuPedido=  "aguardando"

switch (opcaoCardapio) {
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

switch (opcaoCardapio) {
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
