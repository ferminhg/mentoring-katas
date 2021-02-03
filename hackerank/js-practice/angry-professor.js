"use strict";

// Complete the angryProfessor function below.
function angryProfessor(studentsThreshold, arrivalTime) {
  const arrivedStudents = arrivalTime.filter((studentTime) => studentTime <= 0);
  if (arrivedStudents.length < studentsThreshold) {
    return "YES";
  }
  return "NO";
}

function main(studentsThreshold, arrivalTime, response) {

  let result = angryProfessor(studentsThreshold, arrivalTime);
  if (result === response) {
    console.log("ok");
  } else if (result !== response) console.log("not ok");
}
main(3, [-1, -2, 1, 3, 4], 'YES');
