function calcularRetorno() {
    var capitalInicial = parseFloat(document.getElementById('capital').value);
    var taxaJuros = parseFloat(document.getElementById('taxa').value);
    var tempoMeses = parseInt(document.getElementById('tempo').value);

    var taxaDecimal = taxaJuros / 100;
    var montante = capitalInicial * Math.pow(1 + taxaDecimal, tempoMeses);
    var montanteFormatado = montante.toFixed(2);

    document.getElementById('resultado').textContent = `O montante após ${tempoMeses} meses será de R$${montanteFormatado}`;
}

console.log(montanteFormatado)