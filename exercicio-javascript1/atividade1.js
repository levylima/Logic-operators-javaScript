const prompt = require('prompt-sync')()

const ageAString = prompt('quantos anos você viveu?')
const ageA = Number(ageAString)

const ageMString = prompt('quantos meses você viveu? ')
const ageM = Number(ageMString)

const ageDString = prompt('quantos dias você viveu? ')
const ageD = Number(ageDString)

const ageDays = (ageA * 365) + (ageM * 30) + (ageD)

console.log(`A quantidade de dias vividos foram:${ageDays}`)

