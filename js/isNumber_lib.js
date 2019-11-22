//модуль проверки на число
(function() {
  window.isNumber = function(userInput) {
    return !isNaN(parseFloat(userInput)) && isFinite(userInput);
  };
})();
