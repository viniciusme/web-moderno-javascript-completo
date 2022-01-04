// Gerando números aleatorios
function rand([min = 1000, max = 10000]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([1000]));
console.log(rand([]));
