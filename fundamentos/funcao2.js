// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenar uma função arrow em uma variável
const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 10));

// Retorno implicito
const subtracao = (a, b) => a - b;

console.log(subtracao(12, 2));

const imprimir2 = (a) => console.log(a);
imprimir2("Legal!!!");
