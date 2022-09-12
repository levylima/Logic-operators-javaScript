const custoString = prompt('Digite o custo de fábrica?')
const custo = Number(custoString)

const porcentagemDistribuidor = 0.28

const imposto = 0.45

custoFinal = (custo * 0.28) + (custo * 0.45) + custo

console.log(`O custo total do carro é de: ${custoFinal}`)