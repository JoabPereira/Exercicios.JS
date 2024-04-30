let nPar = 0;
let nImpa = 0;

function verificarParImpar(numero){
    if (numero %2 === 0) {
        return 'par'
    }else{
        return 'impar'
    }
}

for (let i = 0; i < 10; i++){
    let numero = parseInt(prompt(`Digite o ${i + 1} número inteiro: `));

    if (verificarParImpar(numero) === 'par') {
        nPar++;
    } else{
        nImpa++
    }
}

console.log(`Quantidade de números pares: ${nPar}`)
console.log(`Quantidade de número impares: ${nImpa}`)