// Aqui genramos um objeto e passamos para o JSON

const obj = {
  a: 1,
  b: 2,
  c: 3,
  somo() {
    return a + b + c;
  },
};

console.log(JSON.stringify(obj));

// Aqui vamos pegar JSON e transformar em um obeto

// Mas não podem ser feito como nas duas linhas abaixo
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"));
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"));

// Abaixo algumas formas em que o JSON aceita
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));
console.log(
  JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [], "f": 1.8 }')
);
