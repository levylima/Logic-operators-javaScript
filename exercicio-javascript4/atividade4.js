const prompt = require('prompt-sync')()

const aString = prompt('Digite o valor A:')
const a = Number(aString)

const bString = prompt('Digite o valor B:')
const b = Number(bString)

const cString = prompt('Digite o valor C:')
const c = Number(cString)

r = Math.pow(a+b,2)

s = Math.pow(b+c, 2)

d = r+s / 2

console.log(`O resultado da expressão é de: ${d}`)