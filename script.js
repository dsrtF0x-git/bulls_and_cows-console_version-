(function bullsAndCows() {
  const firstNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
  let secondNumber;
  let bulls = 0;

  checking();

  function checking() {
    bulls = 0;
    let cows = 0;
    getNumber();
    if (firstNumber === secondNumber) {
      return console.log('Вы победили');
    } else if (secondNumber === 0) {
      return console.log('Вы проиграли');
    }

  const secondNumberStr = String(secondNumber);
  const firstNumberStr = String(firstNumber);

  for (let i = 0; i < firstNumberStr.length; i++) {
    if (firstNumberStr[i] === secondNumberStr[i]) {
      bulls++;
    } else if (firstNumberStr.includes(secondNumberStr[i])) {
      cows++;
    }
  }

  console.log(`${bulls} быков/бык/быка и ${cows} коров/корова/коровы`);
  return checking();

  }

  // Получение числа
  function getNumber() {
    secondNumber = +prompt('Your number is ', '1');
    if ((typeof +secondNumber === 'number' && String(secondNumber).length === 4) || secondNumber === 0) {
      return;
    } else {
      getNumber();
    }
  }
}());
