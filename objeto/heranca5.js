console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("Escola Cod3r".reverse());
console.log("Vinicius".reverse());

Array.prototype.first = function () {
  return this[0];
};

console.log([1, 2, 3, 4, 5].first());
console.log(["a", "b", "c", "d", "e"].first());

// Não fazer - não alterar funcções que ja exista em prototype
String.prototype.toString = function () {
  return "Lasdcou Tudo";
};

console.log("Escola Cod3r".reverse());
