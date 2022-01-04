// Closure é o escopo criado quando uma função é declarada e esse escopo vai permitir que a função acessar e manipular variavéis externas à função.

// Contexto Léxico em ação
const x = "Global";

function fora() {
  const x = "Local";

  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
