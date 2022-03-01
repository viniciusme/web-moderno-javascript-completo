const escola = [
  {
    nome: "Turma M1",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1,
      },
      {
        nome: "Ana",
        nota: 9.3,
      },
    ],
  },
  {
    noma: "Turma M2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 8.9,
      },
      {
        nome: "Roberto",
        nota: 7.3,
      },
    ],
  },
];

const getNotaDoAluno = (aluno) => aluno.nota;
const getNotaDaTurma = (turma) => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotaDaTurma);
console.log(notas1);

console.log([].concat([8.1, 9.3], [8.9, 7.3]));
