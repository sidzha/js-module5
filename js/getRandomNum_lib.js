//модуль создания случайного числа
(function() {
  window.getRandomNumber = function(startRange, endRange) {
    return Math.floor(Math.random() * (endRange - startRange) + startRange);
  };
})();
