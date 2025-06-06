function calcularZinco() {
  const quantidade = parseFloat(document.getElementById("quantidade").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const largura = parseFloat(document.getElementById("largura").value); 
  const resultado = document.getElementById("resultado");

  if (isNaN(peso) || peso <= 0 || isNaN(quantidade) || quantidade <= 0) {
    resultado.innerHTML = "<p>❌ Por favor, insira valores válidos.</p>";
    return;
  }

  let pesoDoMetro;

  if (largura === 1.00) pesoDoMetro = 3.440;
  else if (largura === 1.20) pesoDoMetro = 4.128;
  else if (largura === 0.40) pesoDoMetro = 1.38;
  else if (largura === 0.50) pesoDoMetro = 1.720;
  else if (largura === 0.60) pesoDoMetro = 2.064;
  else if (largura === 0.70) pesoDoMetro = 2.408;
  else if (largura === 0.80) pesoDoMetro = 2.752;
  else if (largura === 0.90) pesoDoMetro = 3.096;
  else {
    resultado.innerHTML = "<p>❌ Largura inválida.</p>";
    return;
  }

  let metrosPorPeso = peso / pesoDoMetro;
  let metrosTotais = metrosPorPeso * quantidade;

  resultado.innerHTML = `✅ Quantidade total de metros: <strong>${metrosTotais.toFixed(2)} m</strong>`;
}



