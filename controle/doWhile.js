function getinteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = -1;

do {
  opcao = getinteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhid foi ${opcao}.`);
} while (opcao != -1);

console.log("Ate a próxima!");
