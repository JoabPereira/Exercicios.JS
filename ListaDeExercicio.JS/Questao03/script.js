let numeros = [10, 2, 8, 19, 20, 15, 31, 23]
let resultadoSoma = Math.min.apply(Math, numeros) + Math.max.apply(Math, numeros)

console.log(`Menor valor: ${Math.min.apply(Math, numeros)}`)
console.log(`Maior valor: ${Math.max.apply(Math, numeros)}`)
console.log(`A soma dos valores: ${resultadoSoma}`)