function getinteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getinteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhid foi ${opcao}.`);
}

console.log("Ate a próxima!");
