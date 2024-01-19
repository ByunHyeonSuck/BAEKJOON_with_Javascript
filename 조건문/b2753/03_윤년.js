const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./조건문/b2753/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
const newinput = input.split(" ").map((item) => +item);

solution(newinput[0]);

function solution(A) {
  if (A % 4 == 0 && (A % 100 != 0 || A % 400 == 0)) {
    console.log("1");
  } else {
    console.log("0");
  }
}
