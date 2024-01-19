const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./조건문/b9498/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
const newinput = input.split(" ").map((item) => +item);

solution(newinput[0]);

function solution(A) {
  if (A >= 90 && A <= 100) {
    console.log("A");
  } else if (A <= 89 && A >= 80) {
    console.log("B");
  } else if (A <= 79 && A >= 70) {
    console.log("C");
  } else if (A <= 69 && A >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}
