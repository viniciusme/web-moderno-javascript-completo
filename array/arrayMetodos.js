const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];

pilotos.pop(); // Esse método remove o último elemento do array
console.log(pilotos);

pilotos.push("Verstappen"); // Esse método adiciona um elemento na última posição do array
console.log(pilotos);

pilotos.shift(); // Esse método remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Hamilton"); // Esse método adiciona um elemento na primeira posição do array
console.log(pilotos);

// Splice pode adicionar e remover elementos

// Aqui vamos adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// Aqui vamos remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Esse método retorna um novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); //Esse método retorna um novo array com os indices solicitados mas sem incluir o último indice.
console.log(algunsPilotos2);
