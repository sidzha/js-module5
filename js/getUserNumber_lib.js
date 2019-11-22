//модуль получения числа

(function() {
  window.getUserInput = function() {
    let userInput = prompt("Ваше число");
    while (userInput != null) {
      if (!isNumber(userInput)) {
        alert("Введите число!");
        return getUserInput();
      } else {
        return +userInput;
      }
    }
  };
})();
