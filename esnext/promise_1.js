let a = 1;

console.log(a);

let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(3);
});

p.then(function (valor) {
  console.log(valor);
});
