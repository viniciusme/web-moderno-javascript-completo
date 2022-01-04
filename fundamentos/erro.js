function tratarErroElancer(erro) {
  //throw new Error("...");
  //throw 10;
  //throw true;
  throw "Mensagem de erro!";
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroElancer(e);
  } finally {
    console.log("Final");
  }
}

const obj = { nome: "Roberto" };
imprimirNomeGritado(obj);
