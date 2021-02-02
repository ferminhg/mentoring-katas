"use strict";
// https://www.hackerrank.com/challenges/time-conversion/problem
function birthdayCakeCandles(candles) {
  // IDEA: probar una funcion que se llama max
  const numeroMasAlto = Math.max(...candles);

  const result = candles.filter(numCandles => numCandles == numeroMasAlto);
  return result.length;
}

function execute(candles, exceptedResult) {
  const result = birthdayCakeCandles(candles);
  if (result == exceptedResult) {
    console.log("👍");
  } else {
    console.log("👎");
  }
}

execute([4, 4, 1, 3], 2);
execute([3, 2, 1, 3], 2);
execute([1, 2, 4, 5], 1);
execute([1, 1], 2);
execute([1, 1, 12, 3, 123, 12, 21, 23], 1);
execute([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 13);
