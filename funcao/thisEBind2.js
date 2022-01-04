function Pessoa() {
  this.idade = 0;

  const sef = this;
  setInterval(
    function () {
      sef.idade++;
      console.log(sef.idade);
    } /*.bind(this)*/,
    1000
  );
}

new Pessoa();
