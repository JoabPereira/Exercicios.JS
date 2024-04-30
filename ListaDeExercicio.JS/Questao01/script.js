function calculaPopulacao(populacaoAtual, taxaCrescimentoAnual, anos) {
    return populacaoAtual * (1 + taxaCrescimentoAnual) ** anos;
  }
  
  const populacaoA = 80000;
  const taxaCrescimentoA = 0.03; // 3%
  
  const populacaoB = 200000;
  const taxaCrescimentoB = 0.015; // 1.5%
  
  let anos = 0;
  let populacaoAPrevista = 0;
  let populacaoBPrevista = 0;
 
  while (populacaoAPrevista < populacaoB) {
    anos++;
    populacaoAPrevista = calculaPopulacao(populacaoA, taxaCrescimentoA, anos);
    populacaoBPrevista = calculaPopulacao(populacaoB, taxaCrescimentoB, anos);
  }
 
  console.log(`Número de anos: ${anos}`);