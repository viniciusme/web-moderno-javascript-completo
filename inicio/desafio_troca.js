// trocar o valor das variáveis e depois da troca o valor de a = 94 e b = 7

// Primeira forma
/*let a = 7;
let b = 94;

let c = a;
let d = b;

a = d;
b = c;

console.log(a, b);
*/

// Segunda forma

let a = 7;
let b = 94;

let temp = a;

a = b;
b = temp;

console.log(a, b);
