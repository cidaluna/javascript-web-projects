alert('Boas vindas ao Jogo do Número Secreto');
let secretNumber = 29;
let attempt = 1; // número de tentativas
let userNumber;

console.log(secretNumber);
console.log(userNumber);
console.log(typeof secretNumber);
console.log(typeof userNumber);

// enquanto o número do usuário nao for igual ao número secreto, exiba a pergunta
while (userNumber != secretNumber){
  userNumber = parseInt(prompt('Escolha um número entre 1 e 30? '));

  if (secretNumber === userNumber) {
    alert(`Parabéns! Você acertou o número secreto, com ${attempt} tentativa(s).`);
  } else {
    if (secretNumber > userNumber) {
      alert(`O número secreto é maior do que o que você digitou (${userNumber}). Tente novamente!`);
    } else {
      alert(`O número secreto é menor do que o que você digitou (${userNumber}). Tente novamente!`);
    }
    attempt++;
  }

}
