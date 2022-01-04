// Gerando números aleatorios

function rand({ min = 0, max = 10000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { max: 10000, min: 1000 };
console.log(rand(obj));
console.log(rand({ min: 955 }));

console.log(rand({}));
