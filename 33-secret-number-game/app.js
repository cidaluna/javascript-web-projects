alert('Boas vindas ao Jogo do Número Secreto');
let maxNumber = 10;
let secretNumber = parseInt(Math.random() * maxNumber + 1); // De 0 à 9 (+1) temos de 0 à 10
let attempt = 1; // número de tentativas
let userNumber;

console.log(secretNumber);
console.log(userNumber);
console.log(typeof secretNumber);
console.log(typeof userNumber);

// enquanto o número do usuário nao for igual ao número secreto, exiba a pergunta
while (userNumber != secretNumber){
  userNumber = parseInt(prompt(`Escolha um número entre 1 e ${maxNumber}?`));

  wordAttempt = attempt > 1 ? 'tentativas' : 'tentativa';

  if (secretNumber === userNumber) {
    alert(`Parabéns! Você acertou o número secreto, com ${attempt} ${wordAttempt}.`);
  } else {
    if (secretNumber > userNumber) {
      alert(`O número secreto é maior do que o que você digitou (${userNumber}). Tente novamente!`);
    } else {
      alert(`O número secreto é menor do que o que você digitou (${userNumber}). Tente novamente!`);
    }
    attempt++;
  }

}
