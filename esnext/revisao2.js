// Arrow Function

const soma = (a, b) => a + b;
console.log(soma(2, 3));

const somaComCorpo = (c, d) => {
  return c + d;
};
console.log(somaComCorpo(5, 5));

// Arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parametro default
function log(texto = "Node") {
  console.log(texto);
}

log();
log(undefined);
log(null);
log("Sou mais forte que o valor padrão");

// Operador rest
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}

console.log(total(2, 3, 4, 5));
