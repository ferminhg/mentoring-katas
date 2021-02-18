function timeConversion(string) {
  const containPM = string.includes("PM");
  let oldTime = string.slice(0, 2);
  let newTime = parseInt(oldTime);
  if (containPM) {
    newTime += 12;
    newTime = newTime.toString();
    if (newTime === "24") {
      newTime = "12";
    }
    newTime = string.replace(oldTime, newTime);
    return newTime.slice(0, string.length - 2);
  } else {
    if (newTime === 12) {
      newTime = "00";
      newTime = string.replace(oldTime, newTime);
      return newTime.slice(0, string.length - 2);
    }
    return string.slice(0, string.length - 2);
  }
}
function checkResults(timeConversion, expectedResult, func) {
  const newTime = func(timeConversion);
  if (newTime == expectedResult) {
    console.log("👍");
  } else {
    console.log(
      "👎 " +
        timeConversion +
        " Expected result: " +
        expectedResult +
        " vs " +
        newTime
    );
  }
}

checkResults("07:05:45PM", "19:05:45", timeConversion);
checkResults("12:01:00AM", "00:01:00", timeConversion);
checkResults("12:01:00PM", "12:01:00", timeConversion);
