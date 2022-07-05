const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 12 * * 3", function () {
  console.log("Executando Tarefa 1!", new Date().getSeconds());
});

setTimeout(function () {
  tarefa1.cancel();
  console.log("Cancelado");
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 12;
regra.second = 30;

const tarefa2 = new schedule.scheduleJob(regra, function () {
  console.log("Executando Tarefa 2!", new Date().getSeconds());
});
