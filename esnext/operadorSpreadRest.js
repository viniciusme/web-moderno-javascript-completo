// operador ... rest(juntar)/spread(espalhar)
// usar rest como parâmetro de função

// usar spread com objeto
const funcionario = { nome: "Maria", Salario: 12348.99 };
const clone = { ativo: true, ...funcionario };

console.log(clone);

// usar spread com array
const grupoA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["Maria", "Rafaela", ...grupoA];

console.log(grupoFinal);
