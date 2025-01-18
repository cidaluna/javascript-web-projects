alert('Boas vindas ao Jogo do Número Secreto');
let secretNumber = 29;

let userNumber = parseInt(prompt('Escolha um número entre 1 e 30'));

console.log(secretNumber);
console.log(userNumber);
console.log(typeof secretNumber);
console.log(typeof userNumber);

if (secretNumber === userNumber) {
  alert('Parabéns! Você acertou o número secreto!!!');
} else {
  alert('Ops! Não foi dessa vez, tente novamente!')
}