let salario = 1000;
let ano = 1995;


for (let i = 1996; i <= 2022; i++) {
  if (i === 1996) {
    salario += salario * 0.015;
  } else {
    const aumento = (salario / 100) * (0.015 * 2 * (i - 1996));
    salario += aumento;
  }
}

console.log(`O salário atual do funcionário é de R$ ${salario.toFixed(2)}`);