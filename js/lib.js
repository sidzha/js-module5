(function() {
  const RANDOM_NUMBER_FROM = 1; //starting range for random number
  const RANDOM_NUMBER_TO = 10; //ending range for random number
  const MAX_ATTEMPTS_NUMBER = 2;
  let randomNumber = getRandomNumber(RANDOM_NUMBER_FROM, RANDOM_NUMBER_TO);
  let attempts = MAX_ATTEMPTS_NUMBER; //number of attempts

  window.start = function() {
    alert("Привет! Я загадал число от 1 до 10! Угадай его ;)");
    let userNumber = getUserInput();
    checkAttempts(userNumber, randomNumber, attempts);
  };

  function checkAttempts(userNumber, randomNumber, attempts) {
    if (!attempts) {
      gameOver();
    } else {
      checkUserNumber(userNumber, randomNumber);
    }
  }

  function gameOver() {
    let dialogBox = confirm(
      "Gamve over! You have reached the maximum attempts (3). Wanna try again?"
    );
    if (dialogBox == true) {
      alert("Я загадал новое число, у тебя 3 попытки!");
      return checkAttempts(
        getUserInput(),
        getRandomNumber(RANDOM_NUMBER_FROM, RANDOM_NUMBER_TO),
        (attempts = MAX_ATTEMPTS_NUMBER)
      );
    } else {
      return;
    }
  }

  function checkUserNumber(userNumber, randomNumber) {
    if (userNumber < randomNumber) {
      alert("Больше!");
      return checkAttempts(getUserInput(), randomNumber, --attempts);
    }
    if (userNumber > randomNumber) {
      alert("Меньше!");
      return checkAttempts(getUserInput(), randomNumber, --attempts);
    }
    if (userNumber == randomNumber) {
      alert("Черт возьми, ты это сделал!");
      return;
    }
  }
})();
