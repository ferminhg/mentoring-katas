"use strict";

// Complete the angryProfessor function below.
//https://www.hackerrank.com/challenges/angry-professor/problem

const canceledClass = "YES";
const notCanceledClass = "NO";

function angryProfessor(studentsThreshold, arrivalTime) {
  const arrivedStudents = arrivalTime.filter((studentTime) => studentTime <= 0);
  if (arrivedStudents.length < studentsThreshold) {
    return canceledClass;
  }
  return notCanceledClass;
}

function main(studentsThreshold, arrivalTime, response) {
  let result = angryProfessor(studentsThreshold, arrivalTime);
  if (result === response) {
    console.log("ok");
  } else {
    console.log("not ok");
  }
}
main(3, [-1, -2, 1, 3, 4], canceledClass);
main(4, [-1, -2, 0, -3, 4], notCanceledClass);
