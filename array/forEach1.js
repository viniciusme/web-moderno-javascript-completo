const aprovados = ["Agatha", "Aldo", "Daniel", "Raque"];

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1} - ${nome}`);
});

aprovados.forEach((nome, indice) => console.log(`${indice + 1} - ${nome}`));

const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);
