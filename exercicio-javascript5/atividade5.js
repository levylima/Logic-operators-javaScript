const prompt = require('prompt-sync')()

const nota1String = prompt('Digite a nota 1:')
const nota1 = Number(nota1String)

const nota2String = prompt('Digite a nota 2:')
const nota2 = Number(nota2String)

const nota3String = prompt('Digite a nota 3:')
const nota3 = (nota3String)

const mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

console.log(`A média ponderada das notas foi: ${mediaFinal}`)